'use strict';

const path = require('path');

module.exports = {
    mode: "production",
    entry: require.resolve("."),
    output: {
        path: __dirname,
        filename: "browser.js",
        library: "RPC",
        libraryTarget: "umd",
    },
    resolve: {
        fallback: {
            fs: false,
            os: false,
            timers: require.resolve("timers-browserify"),
        },
    },
};
