const path = require('path');
const {config} = require('./wdio.shared.conf');

config.port = 4723;

config.specs = [
    './test/specs/android/add-note-screen*.js'
];


config.capabilities = [
    {
        platformName: 'Android',
        'appium:platformVersion': '11',
        'appium:deviceName': 'Pixel 3',
        'appium:automationName': 'uiautomator2',
        'appium:app': path.join(process.cwd(), './app/android/ColorNote Notepad.apk'),
        'appium:autoGrantPermissions': true
        }
        

]

config.services = ['appium'];

exports.config = config;