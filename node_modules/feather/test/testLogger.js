var logger = require('../lib/logger');
var assert = require('assert');
var test = require('utest');

test('Running tests', {
  'before' : function() {
    this.loggerLevels = ['info', 'warn', 'error', 'emergency', 'alert', 'critical', 'debug', 'notice'];
  },
  'Test all available logger levels': function() {
    for (var i = 0; i < this.loggerLevels.length; i++) {
      test('all logger level \"' + this.loggerLevels[i] + '\", logs OK! Exception is thrown in event of a failure!', function() {
        try {
          logger[this.loggerLevels[i]]('Testing logger level ' + this.loggerLevels[i]);
          //also check log file for current date to ensure that all is logged properly!
        } catch (e) {
          throw(e);
        }
      })
    }
  },
  'Exception is thrown when logging with level that is not defined!' : function() {
    assert.throws(function() {
      logger.foo('foobar');
    });
  },
  'testing' : function() {
    logger.info('foo')
  }
});
