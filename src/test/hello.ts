// Dependencies
import * as Code from '@hapi/code';
import * as Lab from '@hapi/lab';

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
