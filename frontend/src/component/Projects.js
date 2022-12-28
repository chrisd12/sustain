import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { Button, CardActionArea, CardActions, requirePropFactory } from '@mui/material';
import {useState, setValue} from 'react';
import { web3, fundContract } from './contractInter';


const getBalance = async (sliderValue) => {
  const accounts = await web3.eth.getAccounts();
  console.log(sliderValue);

  console.log(typeof(sliderValue));
  try{
      let balance = await fundContract().methods.fund().send({
        from: accounts[0],
        value: web3.utils.toWei(String(sliderValue), 'ether'),
        gas:143224,
      });

      console.log(balance)
  } catch(err) {
      console.log(err)

  }
}

export default function MultiActionAreaCard() {
  const [sliderValue, setValue] = useState(0.05);

  const sliderChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Card sx={{ maxWidth: 345, margin: 2.5, boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require("../assets/nairobi.jpg")}
          alt="solar plant"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            30 kW Solar Plant in Nairobi, Kenya
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This investment will be used to build a solar plant in Nairobi, on the roof of a school. This solar plant will be loaned 
            to the school, and thus providing a 10% ROI.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Slider
        aria-label="Temperature"
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
          {sliderValue} USDT
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
        <Button onClick={() => getBalance(sliderValue)}
        size="medium" color="primary" style={{ backgroundColor: "lightgrey", width: "200px"  }}>
          Invest
        </Button>
      </CardActions>
    </Card>
  );
}