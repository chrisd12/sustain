//connect with metamask
import * as React from 'react';
import Web3 from 'web3';
import Button from '@mui/material/Button';

const web3 = new Web3(window.ethereum);
const goerliId = '0x5';

export function MetamaskConnect() {
  const [buttonName, setButtonName] = React.useState("Connect with MetaMask");

  const handleConnectWithMetaMask = async () => {
    if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
      window.ethereum.request({ method: 'eth_requestAccounts' }).then(async () => {
        if (window.ethereum.selectedAddress) {
          const networks = await web3.eth.net.getId();
          setButtonName(window.ethereum.selectedAddress);

          console.log(networks);
          console.log(buttonName);
          
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