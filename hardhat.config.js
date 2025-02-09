require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    sonicTestnet: {
      url: "https://testnet-rpc.soniclabs.com",
      chainId: 57054,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
