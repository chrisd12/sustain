//projects page
import * as React from 'react';
//import { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Typography, Button, ToggleButtonGroup,ToggleButton } from '@mui/material';
import MetamaskConnect from './metamask_v2';


function createUserProfile(user_name, user_email, user_wallet, user_signature){
  const url = "http://localhost:5000/signup/user"
  fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: `${user_name}`,
      email: `${user_email}`,
      address: `${user_wallet}`,
      signature: `${user_signature}`,
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

function createCompanyProfile(company_name, company_email, company_address, company_description, company_website, company_signature){
  const url = "http://localhost:5000/signup/company"
  fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: `${company_name}`,
      email: `${company_email}`,
      address: `${company_address}`,
      description: `${company_description}`,
      website: `${company_website}`,
      signature: `${company_signature}`

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
const [description, setDescription] = React.useState('')
const [website, setWebsite] = React.useState('')

const [userType, setUserType] = React.useState('user')

const [buttonName, setButtonName] = React.useState("Connect with MetaMask");
const [signature, setSignature] = React.useState("");
const [address, setdAddress] = React.useState("");

const handleSignature = async () => {
  const {address, signature} = await MetamaskConnect();
  setdAddress(address);
  setSignature(signature);
}

return (
  <div>
  <div style={{width: "200px", margin: "auto", marginTop: "20px", marginBottom: "10px"  }} >
  <ToggleButtonGroup
  color="primary"
  value={userType}
  exclusive
  onChange={(e)=>setUserType(e.target.value)}
  aria-label="Platform"
>
  <ToggleButton value="user">User</ToggleButton>
  <ToggleButton value="company">Company</ToggleButton>
</ToggleButtonGroup>
  </div>
  {userType==="user"
    ? <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '95%', margin:'5px'},
    }}
    margin = "auto"
    width = {500}
    alignItems="center"
  justifyContent="center"
    border={4}
    noValidate
    autoComplete="off"
  >
    <div>
      <Typography variant="h5" align="center"> Name </Typography>  
      <TextField
        required
        id="name"
        label="Required"
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div>
      <Typography variant="h5" align="center"> Email </Typography>  
      <TextField
        required
        id="email"
        label="Required"
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div  style={{overflowWrap:"break-word"}}>
      
      <Typography variant="h5" align="center"> Wallet Address </Typography>  
      <Button onClick={handleSignature}>{buttonName}</Button>
      <TextField
        required
        id="wallet"
        label="Required"
        value={address}
      />
      <div  style={{overflowWrap:"break-word", margin:"5%"}}>
      <Typography variant='h6'>Signature:</Typography>
      <Typography color={"#1976d2"}>{signature}</Typography>
    </div>
    </div>
    <Button onClick={() => createUserProfile(name,email,address,signature)}
          size="medium" color="primary" style={{ backgroundColor: "lightgrey", width: "20%", margin:"auto",left: "40%"}}>
            Sign up
          </Button>
  </Box>
  :<Box
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
  <div>
    <Typography variant="h5" align="center"> Name </Typography>  
    <TextField
      required
      id="name"
      label="Required"
      value={name} 
      onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div>
    <Typography variant="h5" align="center"> Email </Typography>  
    <TextField
      required
      id="email"
      label="Required"
      value={email} 
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div>
    <Typography variant="h5" align="center"> Description </Typography>  
    <TextField
      required
      id="description"
      label="Required"
      value={description} 
      onChange={(e) => setDescription(e.target.value)}
    />
  </div>
  <div>
    <Typography variant="h5" align="center"> Website </Typography>  
    <TextField
      required
      id="website"
      label="Required"
      value={website} 
      onChange={(e) => setWebsite(e.target.value)}
    />
  </div>
  <div  style={{overflowWrap:"break-word"}}>
      <Typography variant="h5" align="center"> Wallet Address </Typography>  
      <Button onClick={handleSignature}>{buttonName}</Button>
      <TextField
        required
        id="wallet"
        label="Required"
        value={address}
      />
      <div  style={{overflowWrap:"break-word", margin:"5%"}}>
      <Typography variant='h6'>Signature:</Typography>
      <Typography color={"#1976d2"}>{signature}</Typography>
    </div>
    </div>
  <Button onClick={() => createCompanyProfile(name,email, address, description, website, signature)}
        size="medium" color="primary" style={{ backgroundColor: "lightgrey", width: "20%", margin:"auto",left: "40%"}}>
          Sign up
        </Button>
</Box>
  }
  </div>
);
}

export default ProfileForm;