const express = require('express');
const User = require('../database/model/User');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    res.send(`<h1 style="color:green;text-align:center;margin-top:25rem;font-size:3rem;">User route is working properly</h1>`);
});

router.post('/register', async (req, res) => {
    try {
        let success = false;
        const { fname, lname, email, password } = req.body;
        if (!fname || !lname || !email || !password) {
            return res.status(200).json({ msg: 'Please enter all fields', reqBody: req.body, success });
        }
        else {
            const user = await User.findOne({ email });
            if (user) {
                return res.status(200).json({ msg: 'User already exists', success });
            }
            else {
                bycrypt.genSalt(10, (err, salt) => {
                    if (err) throw err;
                    bycrypt.hash(password, salt, async (err, hash) => {
                        if (err) throw err;
                        const newUser = new User({
                            fname,
                            lname,
                            email,
                            password: hash
                        });
                        await newUser.save();
                        return res.status(200).json({ msg: 'User registered successfully', newUser, success: true });
                    }
                    )
                }
                )
            }
        }
    } catch (error) {
        console.log(error, 'error');
    }
});

router.post('/login', async (req, res) => {
    try {
        let success = false;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(200).json({ msg: 'Please enter all fields', reqBody: req.body, success });
        }
        else {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(200).json({ msg: 'User does not exists', success });
            }
            else {
                bycrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                        const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: 3600 });
                        return res.status(200).json({ msg: 'User logged in successfully', token, user, success: true });
                    }
                    else {
                        return res.status(200).json({ msg: 'Invalid credentials', success });
                    }
                })
            }
        }
    } catch (error) {
        console.log(error, 'error');
    }
});


// get the specific user with authorization token in header

router.get('/get', async (req, res) => {
    try {
        let success = false;
        const token = req.header('Authorization');
        if (!token) {
            return res.status(401).json({ error: 'No token, authorization denied', success });
        }
        else {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decoded.user._id).select('-password');
            if (!user) {
                return res.status(404).json({ error: 'User not found', success });
            }
            else {
                return res.status(200).json({ msg: 'User found', user, success: true });
            }
        }
    } catch (error) {
        console.log(error, 'error');
        return res.status(500).json({ error: 'Internal Server error', success: false });
    }
});

router.get('/logout', async (req, res) => {
    try {
        let success = false;
        const token = req.header('Authorization');
        if (!token) {
            return res.status(401).json({ error: 'No token, authorization denied', success });
        }
        else {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decoded.user._id).select('-password');
            if (!user) {
                return res.status(404).json({ error: 'User not found', success });
            }
            else {
                return res.status(200).json({ msg: 'User logged out successfully', success: true });
            }
        }
    } catch (error) {
        console.log(error, 'error');
        return res.status(500).json({ error: 'Internal Server error', success: false });
    }
});

module.exports = router;

// Path: backend/routes/users.js