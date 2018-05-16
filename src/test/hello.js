// Runtime
import 'babel-polyfill';

// Dependencies
import Code from 'code';
import Lab from 'lab';

// Constants
const expect = Code.expect;
const lab = Lab.script ();

// Tests
lab.test ('Hello', async () =>
{
	expect (1 + 1).to.be.equal (2);
});

// Export
export { lab };
