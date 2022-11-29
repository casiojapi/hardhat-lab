const fs = require('fs');

const rskTestnetSeedPhrase = fs
  .readFileSync('.rsk-testnet-seed-phrase')
  .toString()
  .trim();

if (!rskTestnetSeedPhrase || rskTestnetSeedPhrase.split(' ').length != 12) {
  throw new Error("seed phrase is not valid (bip-39)")
}


const rskTestnetResponse = fs
  .readFileSync('.rsk-gas-response.json')
  .toString()
  .trim();

const minimumGasPrice = parseInt(
  JSON.parse(rskTestnetResponse).result.minimumGasPrice,
  16
);

if (typeof minimumGasPrice !== 'number' || isNaN(minimumGasPrice)) {
  throw new Error("min gas not available");
}
console.log("minimum gas price on rsk testnet: ", minimumGasPrice);

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
