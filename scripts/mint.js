const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const contractAddress = "0x7e94E85c2d643902dB63C5bB8F7970D29A712d7A"; // Replace with your actual contract address
  const recipientAddress = "0x7e94E85c2d643902dB63C5bB8F7970D29A712d7A"; // Replace with your wallet
  const tokenURI = "https://gateway.pinata.cloud/ipfs/bafybeicbaiu74huh5xff6siisnq2s6kpuqma5n6q3mze73ijouzprmoqi4/metadata/NFT_0.json"; // Correct URL

  const SonicNFT = await ethers.getContractFactory("SonicNFT");
  const sonicNFT = await SonicNFT.attach(contractAddress);

  const [deployer] = await ethers.getSigners();
  console.log("Minting NFT with account:", deployer.address);

  const mintTx = await sonicNFT.mintNFT(recipientAddress, tokenURI);
  console.log("Minting NFT... Transaction Hash:", mintTx.hash);

  const receipt = await mintTx.wait();
  console.log("NFT Minted Successfully! Transaction confirmed in block:", receipt.blockNumber);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error minting NFT:", error);
    process.exit(1);
  });
