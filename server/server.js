import { dbQuery } from "./utils/utils.js"
import express from 'express';
import cors from 'cors';

const app = express();
const corsOptions ={
   origin:'*', //TODO change with the client later
   credentials: true,            
   optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use(express.json())


app.get("/api", (req,res)=>{
    dbQuery('SELECT * FROM users',res)
  });

app.post("/signup/user", (req,res)=>{
  console.log(req.body.name)
  let name = req.body.name
  let email = req.body.email
  let address = req.body.address
  let signature = req.body.signature
  let sqlParams = [address, name, email, signature]
  dbQuery("INSERT INTO `users`(`address`, `name`, `email`, `picture`, `signature`) VALUES (?,?,?,'',?)",sqlParams,res)
});

app.post("/signup/company", (req,res)=>{
  console.log(req.body.name)
  let name = req.body.name
  let email = req.body.email
  let address = req.body.address
  let description = req.body.description
  let website = req.body.website
  let signature = req.body.signature

  let sqlParams = [address, name, email, description, website, signature]
  dbQuery("INSERT INTO `companies`(`address`, `name`, `email`, `description` ,`picture`, `website`, `signature`) VALUES (?,?,?,?,'',?,?)",sqlParams,res)
});

app.listen(5000, () => {console.log("Server started on port 5000") })