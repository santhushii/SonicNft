require("@nomiclabs/hardhat-ethers"); 
require("dotenv").config(); 
module.exports = { 
    solidity: "0.8.0", 
    networks: { 
        sonicTestnet: { 
            url: "https://testnet-rpc.soniclabs.com", 
            chainId: , 57054
            accounts: [process.env.PRIVATE_KEY] 
        } 
    } 
}; 
