// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.9;

contract Assessment {
    string public message;
    uint256 public favoriteNumber;
    address public owner;

    constructor(string memory initialMessage, uint256 initialNumber) {
        message = initialMessage;
        favoriteNumber = initialNumber;
        owner = msg.sender;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory newMessage) public {
        require(msg.sender == owner, "Only the owner can set the message");
        message = newMessage;
    }

    function getFavoriteNumber() public view returns (uint256) {
        return favoriteNumber;
    }

    function setFavoriteNumber(uint256 newNumber) public {
        require(msg.sender == owner, "Only the owner can set the favorite number");
        favoriteNumber = newNumber;
    }
}
