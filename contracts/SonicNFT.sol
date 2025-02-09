// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;  // Ensure this matches your Hardhat config

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title SonicNFT
 * @dev ERC721 Token with URI storage, owned by a single deployer.
 */
contract SonicNFT is ERC721URIStorage, Ownable {
    uint256 private _tokenIds;  // Counter for NFT token IDs

    /**
     * @dev Constructor sets up the ERC721 token and assigns an owner.
     */
    constructor(address initialOwner) ERC721("SonicNFT", "SNFT") Ownable(initialOwner) {}

    /**
     * @dev Mints a new NFT token.
     * @param recipient The address to receive the NFT.
     * @param tokenURI The metadata URI for the token.
     * @return The new token ID.
     */
    function mintNFT(address recipient, string memory tokenURI)
        public onlyOwner
        returns (uint256)
    {
        _tokenIds += 1;  // Increment token ID counter
        uint256 newItemId = _tokenIds;

        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);  // Set metadata URI

        return newItemId;
    }
}
