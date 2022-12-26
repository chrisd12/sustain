import * as React from 'react';
import Web3 from 'web3';
import Button from '@mui/material/Button'; // or any other UI library you are using

const web3 = new Web3(window.ethereum);
const goerliId = '0x5';

export function MetamaskConnect() {
  const [buttonName, setButtonName] = React.useState("Connect with MetaMask");

  const handleConnectWithMetaMask = async () => {
    // Check if MetaMask is available
    if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
      // Request access to user's accounts
      window.ethereum.request({ method: 'eth_requestAccounts' }).then(async () => {
        // Check if the user has granted the application access to their accounts
        if (window.ethereum.selectedAddress) {
          // Get the list of available networks
          const networks = await web3.eth.net.getId();
          console.log(networks);
          setButtonName(window.ethereum.selectedAddress);
          console.log(buttonName);

          // Find the Goerli network

          // Set the Goerli network as the default network
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: goerliId }],
            });
          } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) {
              try {
                await window.ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [
                    {
                      chainId: goerliId,
                      chainName: '...',
                      rpcUrls: ['https://...'] /* ... */,
                    },
                  ],
                });
              } catch (addError) {
                // handle "add" error
              }
            }
            // handle other "switch" errors
          }
        } else {
          console.log('User has not granted access to their accounts');
        }
      });
    } else {
      console.log('MetaMask is not available');
    }
  };

  return (
    <Button onClick={handleConnectWithMetaMask}>{buttonName}</Button>
  );
}