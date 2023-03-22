#Feather

A light-weight logger

Current version 0.0.4

    `npm install feather`

* Feather integrates seamlessly with your codebase and has minimal overheads.
* Configurarly control what you log in dev and in production.
* Why? because logs that are useful during development can be discarded in production.

It uses Unix log levels `[Emergency, Alert, Critical, Error, Warn, Notice, Info, Debug]`, and similarly to logging
facilities like [syslog] (http://www.syslog.org/), Feather allows you to define the highest level to log up too.
This avoids printing out debug logs in production, for example. Or if you want to discard both Info and Debug level logs
you can. This is what loger can do for you.

#Main step below

* Functions provided by feather are:

        `var logger = require('feather');`

        `logger.emergency('emergency message');
         logger.alert('alert message);
         logger.critical('critical error message');
         logger.error('error message');
         logger.warn('warn message');
         logger.notice('notice message');
         logger.info('info message');
         logger.debug('data data');`

#Run tests

Now you can run the tests. Chenge the rootLogger node in config/loggerProperties.js configuration and run the tests again.
Have a play and feed back to me at <viktor.trako@holidayextras.com>.

    `$ node test/run.js                          // run tests`

#Set up

* Feather looks for a featherProperties.js in config directory in your app directory. If it cannot find one then it will
use its default configuration file in feather/config/featherProperties.

* Taking a look inside feather/config/featherProperties:

    `module.exports = {
       "timestampFormat" : "dddd, MMMM Do YYYY, h:mm:ss a",
       "level" : "Info"
     }`

 This is a good example of the properties set. Whatever value the rootLevel node is set to then nothing below that
 value will be loged. In the instance above where `[info]` is set, all log messages will be loged apart from `[debug]`
 messages. If `[warn]` is assigned to rootLevel then `[notice]`, `[info]`, and `[debug]` messages throughout your
 codebase will be ignored.