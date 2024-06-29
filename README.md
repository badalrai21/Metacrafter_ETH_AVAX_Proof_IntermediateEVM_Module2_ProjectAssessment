# Metacrafter_ETH_AVAX_Proof_IntermediateEVM_Module2_ProjectAssessment

Blockchain Message Manager is a decentralized application (DApp) designed to provide users with a hands-on experience in interacting with Solidity smart contracts deployed on the Ethereum blockchain. Built using React with Next.js for the frontend, this platform allows users to manage ```messages```, ```favorite numbers```, and explore dynamic contract functionalities directly through their web browser. Whether you're new to blockchain technology or an experienced developer, this application offers a user-friendly environment to learn, experiment, and engage with Ethereum smart contracts.

## Description
This project showcases a decentralized application (DApp) built using Solidity smart contracts and a React frontend powered by Next.js. The DApp allows users to interact with the Ethereum blockchain, specifically with a smart contract that manages a message and a favorite number. Additionally, the contract includes functionality to set the ```message length``` dynamically.

## Features
➛ Smart Contract Interaction: Users can connect their MetaMask wallet to interact with the deployed Solidity smart contract.  
➛ Message Management: Users can view and update a message stored on the blockchain.  
➛ Favorite Number: Users can view and update their favorite number through the DApp.  
➛ Dynamic Message Length: The contract allows users to set the maximum allowed length for the message, demonstrating dynamic contract functionalities.    


## Getting Started
### Executing the Program
After cloning the GitHub repository, follow these steps to get the code running on your computer:

1. Install Dependencies: Inside the project directory, in the terminal, install dependencies using npm:
  ``` javascript
    npm install
  ```
2. Open Additional Terminals: Open two additional terminals within your VS Code environment.

3. Start Local Ethereum Node: In the second terminal, start a local Ethereum node using Hardhat:
 ``` javascript
    npx hardhat node
  ```
This command initializes a local Ethereum network on your machine.

4. Deploy the Smart Contract: In the third terminal, deploy the smart contract to your local network:
``` javascript
    npx hardhat run --network localhost scripts/deploy.js
```
Ensure that the deployment script (scripts/deploy.js) is correctly configured to deploy your Solidity smart contract.

5. Launch the Frontend: Back in the first terminal, start the Next.js development server to launch the frontend:
``` javascript
    npm run dev
```
The development server starts, and the DApp should now be accessible at http://localhost:3000.

6. Explore the DApp: Connect your MetaMask wallet to interact with the DApp on the local Ethereum network. You can manage the message, update the favorite number, and explore dynamic message length functionalities.
 By following these steps, you can set up, deploy, and run the decentralized application locally on your machine.


   
Once you are on the Remix website, create a new file by clicking on the "+" icon in the left-hand sidebar. Save the file with a .sol extension (e.g., Hotel.sol). Copy and paste the following code into the file:

```javascript
// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

contract Hotel {
    address public owner;
    uint256 public roomCount;

    struct Room {
        uint256 id;
        string name;
        uint256 price;
        bool isAvailable;
    }

    mapping(uint256 => Room) public rooms;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    event RoomAdded(uint256 id, string name, uint256 price);
    event RoomUpdated(uint256 id, string name, uint256 price, bool isAvailable);

    function addRoom(uint256 _id, string memory _name, uint256 _price) public onlyOwner {
        require(_price > 0, "Price must be greater than zero");

        rooms[_id] = Room(_id, _name, _price, true);
        roomCount++;

        emit RoomAdded(_id, _name, _price);
    }

    function updateRoom(uint256 _id, string memory _name, uint256 _price, bool _isAvailable) public onlyOwner {
        require(_price > 0, "Price must be greater than zero");

        Room storage room = rooms[_id];
        if (bytes(room.name).length == 0) {
            revert("Room does not exist");
        }

        room.name = _name;
        room.price = _price;
        room.isAvailable = _isAvailable;

        emit RoomUpdated(_id, _name, _price, _isAvailable);
    }

    function getRoom(uint256 _id) public view returns (string memory, uint256, bool) {
        Room storage room = rooms[_id];
        require(bytes(room.name).length > 0, "Room does not exist");
        return (room.name, room.price, room.isAvailable);
    }

    function totalRooms() public view returns (uint256) {
        assert(roomCount >= 0);
        return roomCount;
    }
}

```

## Compiling the Code
➛ Open the "Solidity Compiler" tab in the left-hand sidebar.  
➛ Ensure the "Compiler" option is set to "0.8.18" (or another compatible version).  
➛ Click the "Compile Hotel.sol" button.   

## Deploying the Contract
➛ Open the "Deploy & Run Transactions" tab in the left-hand sidebar.  
➛ Select the "Hotel" contract from the dropdown menu.  
➛ Click the "Deploy" button.  

### Interacting with the Contract
#### 1. Add a Room:

➝ Expand the addRoom function in the deployed contract section.  
➝ Enter the parameters: _id, _name, _price.  
➝ Click transact to add the room.  

#### 2. Update a Room:

➝ Expand the updateRoom function in the deployed contract section.  
➝ Enter the parameters: _id, _name, _price, _isAvailable.  
➝ Click transact to update the room.  

#### 3. View a Room:

➝ Expand the getRoom function in the deployed contract section.  
➝ Enter the _id of the room you want to view.  
➝ Click call to view the room details.  

#### 4. Get Total Rooms:

➝ Expand the totalRooms function in the deployed contract section.  
➝ Click call to view the total number of rooms.  

## Help
If you encounter any issues or have questions about this project, there are several resources available to assist you:

### Documentation
Solidity Documentation: Comprehensive documentation for the Solidity programming language, including syntax and features. Visit Solidity Documentation.
Remix Documentation: Learn how to use Remix, the online Solidity IDE, with detailed guides and examples. Visit Remix Documentation.  
##### Common Issues
##### 1. Insufficient Gas:

➝ Ensure you have enough Ether in your account to cover the transaction gas fees.  
➝ Try increasing the gas limit for your transaction.  
##### 2. Compiler Errors:

➝ Verify that you are using a compatible Solidity compiler version (e.g., 0.8.26).  
➝ Double-check your contract code for syntax errors.  
##### 3. Deployment Issues:

➝ Make sure you are connected to the correct Ethereum network (e.g., Mainnet, Ropsten, Rinkeby).  
➝ Ensure your Ethereum wallet is unlocked and has sufficient funds.  

### FAQs
Q: How do I add a new room?  
A: Use the addRoom function with the required parameters: _id, _name, and _price. Ensure the _price is greater than zero.

Q: How do I update a room?  
A: Use the updateRoom function with the room's _id, new _name, new _price, and _isAvailable status. Ensure the room exists before updating.

Q: How do I check the total number of rooms?  
A: Use the totalRooms function to get the current count of rooms.

### Contact
If you need further assistance, feel free to reach out:

Email: badalrai242@gmail.com  
GitHub Issues: Report issues or suggest enhancements on our GitHub Issues page.  

#### Community  
Join the community to discuss the project and get help from other user:
LinekdIn: [@BadalRai](https://www.linkedin.com/in/badal-kumar-rai-a0151b259/)  
Discord: Join our Discord Server [@NO2](https://discord.gg/Dnw4ZjEg)    
We hope this information helps you get the most out of our Hotel Management Smart Contract project. If you have any feedback or suggestions, please let us know!

## Authors

Badal Kumar Rai                                                                                                                        
[@BadalRai](https://www.linkedin.com/in/badal-kumar-rai-a0151b259/)

## License

This project is licensed under the Apache 2.0 License - see the LICENSE.md file for details    
> **Note**: This content is proprietary and confidential. Unauthorized copying, modification, distribution, or use of this content is strictly prohibited without explicit permission from the owner.


##### Copyright (c) 2024 badalrai21

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
