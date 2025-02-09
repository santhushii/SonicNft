# Sonic NFT Project 
## Overview 
This project is a simple NFT minting application deployed on the Sonic Blaze Testnet. 
The smart contract allows the owner to mint NFTs and assign metadata stored on IPFS. 
 
## Setup Instructions 
Follow these steps to set up and run the project. 
 
### 1. Clone the Repository 
```cmd 
git clone https://github.com/santhushii/SonicNFT.git 
cd SonicNFT 
``` 
 
### 2. Install Dependencies 
```cmd 
npm install 
``` 
 
### 3. Configure Hardhat 
Edit the `hardhat.config.js` file and update the network details. 
 
### 4. Create a `.env` File 
```cmd 
echo PRIVATE_KEY=your_private_key 
``` 
 
### 5. Compile and Deploy the Smart Contract 
```cmd 
npx hardhat compile 
npx hardhat run scripts/deploy.js --network sonicTestnet 
``` 
 
### 6. Mint an NFT 
```cmd 
npx hardhat run scripts/mint.js --network sonicTestnet 
``` 
 
### 7. Verify the Contract on SonicScan 
Go to [SonicScan](https://sonicscan.org) and enter your contract address to see your deployed NFTs. 
 
## License 
This project is licensed under the MIT License. 
