const abi = require('../contract');
let assert = require('assert');

describe('easy-web3', async () => {

    it("get the contract path", async function(done) {
        try {
            var contractPath = await abi.getContractInterface('../easy-web3js/spec',"testAbi");
            assert.equal(contractPath,true);
            done();
        } catch(err) {
            done(err);
        }
    });
});
