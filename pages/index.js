import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import assessmentAbi from "../artifacts/contracts/Assessment.sol/Assessment.json";

export default function App() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [assessment, setAssessment] = useState(undefined);
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [favoriteNumber, setFavoriteNumber] = useState(undefined);
  const [newFavoriteNumber, setNewFavoriteNumber] = useState(0);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with your deployed contract address
  const contractABI = assessmentAbi.abi;

  useEffect(() => {
    async function init() {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setEthWallet(window.ethereum);
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        setAccount(accounts[0]);
        const deployedContract = new ethers.Contract(contractAddress, contractABI, signer);
        setAssessment(deployedContract);
      }
    }
    init();
  }, []);

  const fetchMessage = async () => {
    if (assessment) {
      const contractMessage = await assessment.getMessage();
      setMessage(contractMessage);
    }
  };

  const fetchFavoriteNumber = async () => {
    if (assessment) {
      const contractFavoriteNumber = await assessment.getFavoriteNumber();
      setFavoriteNumber(contractFavoriteNumber.toNumber());
    }
  };

  const updateMessage = async () => {
    if (assessment) {
      const tx = await assessment.setMessage(newMessage);
      await tx.wait();
      fetchMessage();
    }
  };

  const updateFavoriteNumber = async () => {
    if (assessment) {
      const tx = await assessment.setFavoriteNumber(newFavoriteNumber);
      await tx.wait();
      fetchFavoriteNumber();
    }
  };

  const connectAccount = async () => {
    if (ethWallet) {
      const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Assessment DApp</h1>
        <p>Your Account: {account}</p>
        <div>
          <p>Message: {message}</p>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="New Message"
          />
          <button onClick={updateMessage}>Update Message</button>
        </div>
        <div>
          <p>Favorite Number: {favoriteNumber}</p>
          <input
            type="number"
            value={newFavoriteNumber}
            onChange={(e) => setNewFavoriteNumber(e.target.value)}
            placeholder="New Favorite Number"
          />
          <button onClick={updateFavoriteNumber}>Update Favorite Number</button>
        </div>
        {!account && <button onClick={connectAccount}>Connect MetaMask</button>}
        <footer>
          <p>Made by: Badal Kumar Rai</p>
        </footer>
      </header>
      <style jsx>{`
        .App-header {
          text-align: center;
        }
        input {
          margin: 0.5rem;
        }
        button {
          margin: 0.5rem;
          padding: 0.5rem 1rem;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 0.25rem;
          cursor: pointer;
        }
        button:hover {
          background-color: #005bb5;
        }
        footer {
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
}
