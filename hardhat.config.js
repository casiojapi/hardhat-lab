const fs = require('fs');

const rskTestnetSeedPhrase = fs
  .readFileSync('.rsk-testnet-seed-phrase')
  .toString()
  .trim();

if (!rskTestnetSeedPhrase || rskTestnetSeedPhrase.split(' ').length != 12) {
  throw new Error("seed phrase is not valid (bip-39)")
}


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.13",
  networks: {
    hardhat: {},
    rskregtest: {
      url: 'http://localhost:4444'
    },
  },
};
