//connect with metamask
import * as React from 'react';
import Web3 from 'web3';
import Button from '@mui/material/Button';
import { ethers } from "ethers"
import { Typography } from '@mui/material';

const web3 = new Web3(window.ethereum);
const goerliId = '0x5';
const message = "I want to sign in to Sustain crowdfunding platform!"


export default async function MetamaskConnect(){
    let address = "waiting"
    let signature = "waiting"
    return new Promise(async (resolve, reject) => {
    if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
      window.ethereum.request({ method: 'eth_requestAccounts' }).then(async () => {
        if (window.ethereum.selectedAddress) {
          const networks = await web3.eth.net.getId();
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
          const address = await signer.getAddress();
          resolve({address, signature});
        } else {
          console.log('User has not granted access to their accounts');
          reject('User has not granted access to their accounts')
        }
      });
    } else {
      console.log('MetaMask is not available');
      reject('MetaMask is not available');
    }
  
  },)
}