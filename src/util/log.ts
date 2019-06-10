// Dependencies
import { TransformableInfo } from 'logform';
import * as path from 'path';
import { createLogger, format, transports } from 'winston';

// Local
import config from './config';

// Configure transports
const transportList = [];

// Console
if (config.log.console.enabled)
	transportList.push (new transports.Console (config.log.console));

// Local
if (config.log.local.enabled)
{
	config.log.local.filename = path.join (
		__dirname, '..', '..', config.log.local.filename);
	transportList.push (new transports.File (config.log.local));
}

// Done
export default createLogger ({
	format: format.combine (
		format.timestamp (),
		format.printf ((i: TransformableInfo) => `${i.timestamp} ${i.message}`)),
	transports: transportList
});
