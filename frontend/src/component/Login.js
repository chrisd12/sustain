//projects page
import * as React from 'react';
//import { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Typography, Button } from '@mui/material';

function createProfile(user_name, user_email, user_wallet){


  const url = "http://localhost:5000/signup"

  fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: `${user_name}`,
      email: `${user_email}`,
      wallet: `${user_wallet}`,
    }),
  })
  .then(function(res) {
      // handle the response
      console.log(res)
    })
    .catch(function(err) {
      // handle the error
      console.log(err)
    });

}

function ProfileForm() {

const [name, setName] = React.useState('')
const [email, setEmail] = React.useState('')
const [wallet, setWallet] = React.useState('')


return (
    <div>
   

    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '90%', margin:'5px'},
    }}
    margin = "auto"
    width = {500}
    alignItems="center"
  justifyContent="center"
    border={4}
    noValidate
    autoComplete="off"
  >
    <h1> LOGIN</h1>
    <div>
      <Typography variant="h3" align="center"> Name </Typography>  
      <TextField
        required
        id="name"
        label="Required"
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div>
      <Typography variant="h3" align="center"> Email </Typography>  
      <TextField
        required
        id="email"
        label="Required"
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div>
      <Typography variant="h3" align="center"> Wallet Address </Typography>  
      <TextField
        required
        id="wallet"
        label="Required"
        value={wallet} 
        onChange={(e) => setWallet(e.target.value)}
      />
    </div>
    <Button onClick={() => createProfile(name,email,wallet)}
          size="medium" color="primary" style={{ backgroundColor: "lightgrey", width: "200px"  }}>
            Sign up
          </Button>
  </Box>
  </div>

);
}

export default ProfileForm;