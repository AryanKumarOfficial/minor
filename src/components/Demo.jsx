// import React from "react";
// import { connect } from "react-redux";
// import { Withdrow, Deposit } from "../Redux/actions/userActions"; // Import your action creators

// const Demo = ({ balance, Withdrow, Deposit }) => {
//   const [amount, setAmount] = React.useState(0);

//   const handleChange = (e) => {
//     setAmount(e.target.value);
//   };

//   const handleWithdraw = () => {
//     console.log(amount);
//     Withdrow(10); // Pass the actual amount you want to withdraw
//     console.log("withdraw");
//   };

//   const handleDeposit = () => {
//     Deposit(10); // Pass the actual amount you want to deposit
//     console.log("deposit");
//   };

//   return (
//     <>
//       <section className="min-h-screen flex justify-center items-center text-3xl font-bold flex-col gap-4">
//         <h1>Manage Account</h1>
//         <h2>Balance: {balance}</h2>
//         <input
//           type="number"
//           className="p-2 border-2 border-indigo-600 rounded-md shadow-2xl"
//           placeholder="Enter Amount"
//           value={amount}
//           onChange={handleChange}
//         />
//         <div className="controller flex gap-4">
//           <button
//             onClick={handleWithdraw}
//             className="bg-indigo-600 p-2 rounded-md text-white shadow-2xl hover:bg-indigo-700"
//           >
//             Withdraw
//           </button>
//           <button
//             onClick={handleDeposit}
//             className="bg-indigo-600 p-2 rounded-md text-white shadow-2xl hover:bg-indigo-700"
//           >
//             Deposit
//           </button>
//         </div>
//       </section>
//     </>
//   );
// };

// const mapStateToProps = (state) => ({
//   balance: state.user.balance,
// });

// const mapDispatchToProps = {
//   Withdrow,
//   Deposit,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Demo);
