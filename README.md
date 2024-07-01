# Blockchain Message Manager
## Metacrafter_ETH_AVAX_Proof_IntermediateEVM_Module2_ProjectAssessment

Blockchain Message Manager is a decentralized application ```(DApp)``` designed to provide users with a hands-on experience in interacting with ```Solidity``` smart contracts deployed on the Ethereum blockchain. Built using React with Next.js for the frontend, this platform allows users to manage ```messages```, ```favorite numbers```, and explore dynamic contract functionalities directly through their web browser. Whether you're new to ```blockchain``` technology or an experienced developer, this application offers a user-friendly environment to learn, experiment, and engage with Ethereum smart contracts.

## Description
This project showcases a ```decentralized application``` (DApp) built using Solidity smart contracts and a ```React frontend``` powered by Next.js. The DApp allows users to interact with the Ethereum blockchain, specifically with a smart contract that manages a message and a favorite number. Additionally, the contract includes functionality to set the ```message length``` dynamically.

## Features
➛ ```Smart Contract Interaction```: Users can connect their MetaMask wallet to interact with the deployed Solidity smart contract.  
➛ ```Message Management```: Users can view and update a message stored on the blockchain.  
➛ ```Favorite Number```: Users can view and update their favorite number through the DApp.  
➛ ```Dynamic Message Length```: The contract allows users to set the maximum allowed length for the message, demonstrating dynamic contract functionalities.    


## Getting Started
### Executing the Program
After cloning the GitHub repository, follow these steps to get the code running on your computer:

#### 1. Install Dependencies:** Inside the project directory, in the terminal, install dependencies using npm:
  ``` 
    npm install
  ```
  
#### 2. Open Additional Terminals: Open two additional terminals within your VS Code environment.  
  

#### 3. Start Local Ethereum Node: In the second terminal, start a local Ethereum node using Hardhat:
 ``` javascript
    npx hardhat node
  ```
This command initializes a local Ethereum network on your machine.  
  

#### 4. Deploy the Smart Contract: In the third terminal, deploy the smart contract to your local network:
``` javascript
    npx hardhat run --network localhost scripts/deploy.js
```
Ensure that the deployment script (scripts/deploy.js) is correctly configured to deploy your Solidity smart contract.  


#### 5. Launch the Frontend: Back in the first terminal, start the Next.js development server to launch the frontend:
``` javascript
    npm run dev
```
The development server starts, and the DApp should now be accessible at http://localhost:3000.  


#### 6. Explore the DApp: Connect your MetaMask wallet to interact with the DApp on the local Ethereum network. You can manage the message, update the favorite number, and explore dynamic message length functionalities.
 By following these steps, you can set up, deploy, and run the decentralized application locally on your machine.


   
## Interacting with the Contract
### 1. View Current Message and Favorite Number:
➝ Connect your MetaMask wallet.  
➝ The DApp will display the current message and favorite number automatically.  

### 2. Update the Message:
➝ Enter a new message in the input field.  
➝ Click "Update Message" and confirm the transaction in MetaMask.  

### 3. Update the Favorite Number:
➝ Enter a new favorite number in the input field.  
➝ Click "Update Favorite Number" and confirm the transaction in MetaMask.    

### 4. Set Message Length:
➝ Enter a new maximum length for the message in the input field.  
➝ Click "Set Message Length" and confirm the transaction in MetaMask.  

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
  
##### 4. MetaMask Connection Problems:
➝ Ensure the MetaMask extension is installed and enabled in your browser.  
➝ Check that you are logged into MetaMask and have selected the correct network.  
➝ If the DApp doesn't detect MetaMask, try refreshing the page or restarting your browser.  
➝ Make sure you have granted the DApp permission to access your MetaMask account.  

    
### FAQs
Q: How do I update the message?  
A: Use the "Update Message" function with the new message. Confirm the transaction in MetaMask.  

Q: How do I update the favorite number?  
A: Use the "Update Favorite Number" function with the new number. Confirm the transaction in MetaMask.  

Q: How do I set the message length?  
A: Use the "Set Message Length" function with the desired maximum length. Confirm the transaction in MetaMask.  

Q: How do I view the current message and favorite number?  
A: Connect your MetaMask wallet and the DApp will automatically display the current message and favorite number.    
  

### Contact
If you need further assistance, feel free to reach out:

Email: badalrai242@gmail.com  
GitHub Issues: Report issues or suggest enhancements on our GitHub Issues page.  

  
#### Community  
Join the community to discuss the project and get help from other user:
LinekdIn: [@BadalRai](https://www.linkedin.com/in/badal-kumar-rai-a0151b259/)  
Discord: Join our Discord Server [@NO2](https://discord.gg/Dnw4ZjEg)    
I hope this information helps you get the most out of our Blockchain Message Manager Smart Contract project. If you have any feedback or suggestions, please let us know!

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
