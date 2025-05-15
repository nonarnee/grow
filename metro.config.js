const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);
config.resolver.sourceExts = ['js', 'jsx', 'ts', 'tsx', 'json'];
config.server = { port: 8090 };
config.maxWorkers = 2;
config.reporter = { verbose: true };

module.exports = config;
