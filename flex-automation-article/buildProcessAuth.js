"use strict"

const otp = require('otp.js');
const rp = require('request-promise');

const options = {
    method: 'POST',
    uri: 'https://console.kinvey.com/_api/v2/session',
    body: {
        email: process.env.KINVEY_USER_EMAIL,
        password: process.env.KINVEY_USER_PASSWORD,
        twoFactorToken: otp.googleAuthenticator.gen(process.env.KINVEY_USER_SECRET)
    },
    json: true
};
 
rp(options)
    .then(function (data) {
        console.log("Successfully authenticated to Kinvey!");
    })
    .catch(function (err) {
        if (err && err.message) {
            console.error(err.message);
        }
        process.exit(1);
    });
