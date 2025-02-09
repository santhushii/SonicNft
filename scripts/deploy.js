const { ethers } = require("hardhat");
require("dotenv").config();
const hre = require("hardhat");


async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  const SonicNFT = await ethers.getContractFactory("SonicNFT");
  const sonicNFT = await SonicNFT.deploy();
  await sonicNFT.deployed();

  console.log("SonicNFT deployed to:", sonicNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
