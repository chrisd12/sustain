import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { Button, CardActions, Chip } from '@mui/material';
import {useState, setValue} from 'react';
import { web3, fundContract } from './contractInter';


const investP = async (sliderValue, contractAddress) => {
    const accounts = await web3.eth.getAccounts();
    try{  
        let fund = await fundContract(contractAddress).methods.fund().send({
          from: accounts[0],
          value: web3.utils.toWei(String(sliderValue), 'ether'),
          gas:143224,
        });
        
        console.log(fund)
        //TODO add database operation here
    } catch(err) {
        console.log(err)
  
    }
  }
  
  export function ProjectCard(props) {
    const [sliderValue, setValue] = useState(0.05);
  
    const sliderChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div>
      <div style={{"float": "left"}}>
      <Card sx={{ maxWidth: 345, margin: 2.5, boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"}}>
        <CardContent>
          <CardMedia
            component="img"
            height="140"
            image={require(`../assets/${props.picture}`)}
            alt="picture"
          />
            <Typography gutterBottom variant="h6" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
              
            </Typography>
            <Chip label={props.company} />
        </CardContent>
        <CardActions>
        <Slider
          aria-label="amount"
          defaultValue={0.05}
          valueLabelDisplay="auto"
          onChange={sliderChange}
          step={0.01}
          marks
          min={0.01}
          max={1}
          />
        </CardActions>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {sliderValue} ETH
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
          <Button onClick={() => investP(sliderValue, props.contract)}
          size="medium" color="primary" style={{ backgroundColor: "lightgrey", width: "200px"  }}>
            Invest
          </Button>
        </CardActions>
      </Card>
      </div>
  </div>
    );
  }