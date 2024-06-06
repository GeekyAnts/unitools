/** @type {import('next').NextConfig} */
const { withUnitools } = require("@unitools/next-adapter");
const config = withUnitools({});

console.log("config", JSON.stringify(config, null, 2));
module.exports = config;
