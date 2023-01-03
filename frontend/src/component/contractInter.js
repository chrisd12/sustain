//code to interact with the projects smart contract, such as funding the contract
import Web3 from "web3";
import ContractAbi from "../assets/abi.json";
 
let web3;
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  console.log("no metamask");
}

const fundContract = (fundContractAddress) => {
    return new web3.eth.Contract(JSON.parse(ContractAbi.result), fundContractAddress);
};

export { web3, fundContract };