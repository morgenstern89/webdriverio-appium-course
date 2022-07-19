// const path = require('path');
require('dotenv').config()
const {config} = require('./wdio.shared.conf');


// config.port = 4723;
config.user= process.env.BROWSERSTACK_USER;
config.key= process.env.BROWSERSTACK_KEY;

config.specs = [
    './test/specs/android/add-note-screen*.js'
];


config.capabilities = [
    {
        platformName: 'Android',
        'appium:platformVersion': '9.0',
        'appium:deviceName': 'Google Pixel 3',
        'appium:automationName': 'uiautomator2',
        'appium:app': 'bs://841ad099d268ae81fc33ca8513f840eb5ee6f474',
        'appium:autoGrantPermissions': true
    }        
]

config.services = ['browserstack'];

exports.config = config;