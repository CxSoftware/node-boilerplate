// Runtime
import 'babel-polyfill';
import './util/log';

// Dependencies
import winston from 'winston';

// Local
import config from './util/config';

(async () =>
{
	try
	{
		winston.info ('Hello world!');
		winston.info ('Config', config);
	}
	catch (e)
	{
		winston.error (e);
	}
})();
