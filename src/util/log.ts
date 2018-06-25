// Dependencies
import * as path from 'path';
import * as winston from 'winston';

// Local
import config from './config';

// Path
config.log.local.filename = path.join (
	__dirname, '..', '..', config.log.local.filename);

// Configure
// Console
winston.remove (winston.transports.Console);
if (config.log.console.enabled)
	winston.add (winston.transports.Console, config.log.console);

// Local
if (config.log.local.enabled)
	winston.add (winston.transports.File, config.log.local);
