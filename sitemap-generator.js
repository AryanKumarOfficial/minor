const SitemapGenerator = require('sitemap-generator');

// create generator
const generator = SitemapGenerator('hospitalo.vercel.app', {
    stripQuerystring: false,
    lastMod: true,
});


generator.addURL('https://hospitalo.vercel.app/');
generator.addURL('https://hospitalo.vercel.app/about');
generator.addURL('https://hospitalo.vercel.app/contact');
generator.addURL('https://hospitalo.vercel.app/user/login');
generator.addURL('https://hospitalo.vercel.app/user/register');
generator.addURL('https://hospitalo.vercel.app/user/forgot-password');
generator.addURL('https://hospitalo.vercel.app/user/reset-password');
generator.addURL('https://hospitalo.vercel.app/user/profile');
generator.addURL('https://hospitalo.vercel.app/user/verify-email');
generator.addURL('https://hospitalo.vercel.app/user/change-password');
generator.addURL('https://hospitalo.vercel.app/user/change-email');
generator.addURL('https://hospitalo.vercel.app/user/change-avatar');
generator.addURL('https://hospitalo.vercel.app/user/2fa');

generator.addURL('https://hospitalo.vercel.app/admin/dashboard');
generator.addURL('https://hospitalo.vercel.app/admin/users');
generator.addURL('https://hospitalo.vercel.app/admin/users/create');
generator.addURL('https://hospitalo.vercel.app/admin/users/1/edit');

// register event listeners
generator.on('done', () => {
    console.log('sitemap created');

});

// start the crawler
generator.start();