const express = require('express')
const app = express();
const port = 3000;
app.use(express.json())

app.get('/', (req,res)=>{
  res.send("You are at server.js")
})

app.post('/login', (req,res)=>{
  const {email, password} = req.body;
  if(!email){
    return res.status(400).json({message : "Email cannot be empty."})
  }
  if(!password){
    return res.status(400).json({message : "Password length should be greater than 8 or less than or equal to 16."})
  }

  res.status(200).json({message : "Login Successful", data:{email:email}})
})
app.listen(port, ()=>{
  console.log(`Your app is running on http://localhost:${port}`)
})