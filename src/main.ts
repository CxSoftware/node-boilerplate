// Dependencies
import config from './util/config';
import logger from './util/log';

(async () =>
{
	try
	{
		logger.info ('Hello world!');
		logger.info ('Config', config);
	}
	catch (e)
	{
		logger.error (e);
	}
})();
