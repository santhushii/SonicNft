require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();



module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/d04d46c7b0484aefb4e36031990661c4", // Your Infura API Key
      accounts: [process.env.PRIVATE_KEY], // Use your wallet's private key from .env
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY, // Etherscan API Key for contract verification
  }
};
