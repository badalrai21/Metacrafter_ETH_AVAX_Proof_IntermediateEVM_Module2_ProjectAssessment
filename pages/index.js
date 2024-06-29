import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import assessmentAbi from "./artifacts/contracts/Assessment.sol/Assessment.json";

export default function App() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [assessment, setAssessment] = useState(undefined);
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [favoriteNumber, setFavoriteNumber] = useState(undefined);
  const [newFavoriteNumber, setNewFavoriteNumber] = useState(0);
  const [value, setValue] = useState(undefined);
  const [newMessageLength, setNewMessageLength] = useState(0);

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
        fetchMessage();
        fetchFavoriteNumber();
        fetchValue();
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

  const fetchValue = async () => {
    if (assessment) {
      const contractValue = await assessment.getValue();
      setValue(contractValue.toNumber());
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

  const setMessageLength = async () => {
    if (assessment) {
      const tx = await assessment.setMessageLength(newMessageLength);
      await tx.wait();
      console.log(`Message length set to ${newMessageLength}`);
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
        <div className="section">
          <h2>Message</h2>
          <p>{message}</p>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="New Message"
          />
          <button onClick={updateMessage}>Update Message</button>
        </div>
        <div className="section">
          <h2>Favorite Number</h2>
          <p>{favoriteNumber}</p>
          <input
            type="number"
            value={newFavoriteNumber}
            onChange={(e) => setNewFavoriteNumber(e.target.value)}
            placeholder="New Favorite Number"
          />
          <button onClick={updateFavoriteNumber}>Update Favorite Number</button>
        </div>
        <div className="section">
          <h2>Set Message Length</h2>
          <input
            type="number"
            value={newMessageLength}
            onChange={(e) => setNewMessageLength(parseInt(e.target.value))}
            placeholder="New Message Length"
          />
          <button onClick={setMessageLength}>Set Message Length</button>
        </div>
        {!account && <button onClick={connectAccount}>Connect MetaMask</button>}
        <footer>
          <p>Made by: Badal Kumar Rai</p>
        </footer>
      </header>
      <style jsx>{`
        .App-header {
          text-align: center;
          padding: 2rem;
          background-color: #f0f0f0;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .section {
          margin: 1rem;
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          width: 100%;
        }
        input {
          margin-bottom: 0.5rem;
          padding: 0.5rem;
          width: calc(100% - 12px);
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          margin-top: 0.5rem;
          padding: 0.75rem 1rem;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #005bb5;
        }
        footer {
          margin-top: 2rem;
          font-size: 0.8rem;
          color: #888;
        }
      `}</style>
    </div>
  );
}
