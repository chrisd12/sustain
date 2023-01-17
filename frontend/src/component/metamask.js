//connect with metamask
import * as React from 'react';
import Web3 from 'web3';
import Button from '@mui/material/Button';
import { ethers } from "ethers"
import { Typography } from '@mui/material';

const web3 = new Web3(window.ethereum);
const goerliId = '0x5';
const message = "I want to sign in to Sustain crowdfunding platform!"


export function MetamaskConnect() {
  const [buttonName, setButtonName] = React.useState("Connect with MetaMask");
  const [signature, setSignature] = React.useState("");
  const [address, selectedAddress] = React.useState("");


  const handleConnectWithMetaMask = async () => {
    if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
      window.ethereum.request({ method: 'eth_requestAccounts' }).then(async () => {
        if (window.ethereum.selectedAddress) {
          const networks = await web3.eth.net.getId();
          setButtonName(window.ethereum.selectedAddress);
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: goerliId }],
            });
          } catch (switchError) {
            if (switchError.code === 4902) {
              try {
                await window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [
                    {
                      chainId: goerliId,
                    },
                  ],
                });
              } catch (addError) {
                console.log(addError);
              }
            }
          }
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer =  await provider.getSigner();
          const signature = await signer.signMessage(message);
          setSignature(signature);
          const address = await signer.getAddress();
          selectedAddress(address);
        } else {
          console.log('User has not granted access to their accounts');
        }
      });
    } else {
      console.log('MetaMask is not available');
    }
  };

  return (
    <div style={{overflowWrap:"break-word", color:"red"}}>
    <Button onClick={handleConnectWithMetaMask}>{buttonName}</Button>
    <Typography variant="body2">Signature: {signature}</Typography>

    </div>
  );
}