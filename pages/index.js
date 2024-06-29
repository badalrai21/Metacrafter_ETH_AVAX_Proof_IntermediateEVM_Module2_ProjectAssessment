import { useState, useEffect } from "react";
import { ethers } from "ethers";
import assessmentAbi from "../artifacts/contracts/Assessment.sol/Assessment.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [assessment, setAssessment] = useState(undefined);
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [favoriteNumber, setFavoriteNumber] = useState(undefined);
  const [newFavoriteNumber, setNewFavoriteNumber] = useState(0);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with your deployed contract address
  const contractABI = assessmentAbi.abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const accounts = await ethWallet.request({ method: "eth_accounts" });import React, { useState, useEffect } from "react";
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

  const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with your deployed contract address
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
        <h1>Blockchain Interaction</h1>
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
      </header>
    </div>
  );
}

      handleAccount(accounts);
    }
  };

  const handleAccount = (accounts) => {
    if (accounts.length > 0) {
      console.log("Account connected: ", accounts[0]);
      setAccount(accounts[0]);
    } else {
      console.log("No account found");
    }
  };

  const connectAccount = async () => {
    if (!ethWallet) {
      alert("MetaMask wallet is required to connect");
      return;
    }

    const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
    handleAccount(accounts);
    getContract();
  };

  const getContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    setAssessment(contract);
  };

  const fetchMessage = async () => {
    if (assessment) {
      const contractMessage = await assessment.getMessage();
      setMessage(contractMessage);
    }
  };

  const fetchFavoriteNumber = async () => {
    if (assessment) {
      const contractFavoriteNumber = await assessment.getFavoriteNumber();
      setFavoriteNumber(contractFavoriteNumber.toString());
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

  const initUser = () => {
    if (!ethWallet) {
      return <p>Please install MetaMask to use this application.</p>;
    }

    if (!account) {
      return <button onClick={connectAccount} style={buttonStyle}>Connect MetaMask</button>;
    }

    if (message === undefined) {
      fetchMessage();
    }

    if (favoriteNumber === undefined) {
      fetchFavoriteNumber();
    }

    return (
      <div>
        <p>Your Account: {account}</p>
        <div>
          <p>Message: {message}</p>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="New Message"
            style={inputStyle}
          />
          <button onClick={updateMessage} style={buttonStyle}>Update Message</button>
        </div>
        <div>
          <p>Favorite Number: {favoriteNumber}</p>
          <input
            type="number"
            value={newFavoriteNumber}
            onChange={(e) => setNewFavoriteNumber(Number(e.target.value))}
            placeholder="New Favorite Number"
            style={inputStyle}
          />
          <button onClick={updateFavoriteNumber} style={buttonStyle}>Update Favorite Number</button>
        </div>
      </div>
    );
  };

  useEffect(() => {
    getWallet();
  }, []);

  const containerStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  };

  const headerStyle = {
    color: '#4CAF50',
    fontSize: '2em',
    marginBottom: '20px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  };

  const subheaderStyle = {
    color: '#777',
    marginBottom: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '10px 0',
  };

  const inputStyle = {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: 'calc(100% - 22px)',
  };

  const footerStyle = {
    marginTop: '20px',
    color: '#777',
  };

  return (
    <main style={containerStyle}>
      <header>
        <h1 style={headerStyle}>Blockchain Dashboard</h1>
        <p style={subheaderStyle}>Interact with your smart contract</p>
      </header>
      {initUser()}
      <footer style={footerStyle}>
        <p>Made by: Badal Kumar Rai</p>
      </footer>
    </main>
  );
}
