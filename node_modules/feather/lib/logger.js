var Logger = exports;
var util   = require('util');
var moment = require('moment');
var config = require('../config')

Logger.LEVELS = [
  'Emergency',
  'Alert',
  'Critical',
  'Error',
  'Warn',
  'Notice',
  'Info',
  'Debug'
];

Logger.LEVEL = Logger.LEVELS.indexOf(config.level);

Logger.LEVELS.forEach(function(level, index) {
  var method = level.toLowerCase();
  var target = (index > Logger.LEVELS.indexOf('Error'))
      ? 'stdout'
      : 'stderr';

  Logger[method] = function() {
    if (index > Logger.LEVEL) return;

    var message = Logger.format.apply(Logger, arguments);
    process[target].write('[' + level + '] ' + message);
  };
});

Logger.format = function(/* template, arg1, arg2, ... */) {
  var message = util.format.apply(util, arguments);
  var timestamp = moment().format(config.timestampFormat);
  message = timestamp + ': ' + message + '\n';
  return message;
};