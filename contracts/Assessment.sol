// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.9;

contract Assessment {
    string public message;
    uint256 public favoriteNumber;
    uint256 private value;

    event MessageChanged(string newMessage);
    event FavoriteNumberChanged(uint256 newFavoriteNumber);
    event ValueChanged(uint256 newValue);
    event MessageLengthSet(uint256 newLength);

    constructor(string memory initialMessage, uint256 initialNumber) {
        message = initialMessage;
        favoriteNumber = initialNumber;
        value = 0;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
        emit MessageChanged(newMessage);
    }

    function getFavoriteNumber() public view returns (uint256) {
        return favoriteNumber;
    }

    function setFavoriteNumber(uint256 newNumber) public {
        favoriteNumber = newNumber;
        emit FavoriteNumberChanged(newNumber);
    }

    function getValue() public view returns (uint256) {
        return value;
    }

    function setMessageLength(uint256 newLength) public {
        emit MessageLengthSet(newLength);
    }
}
