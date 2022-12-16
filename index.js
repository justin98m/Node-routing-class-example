//Package TO assist in Routing
const express = require('express');
const app = express();
const PORT = 3000;



//Waits for a Get request with base url + '/'
app.get('/',(req,res)=>{
  res.sendFile('./index.html',{root: __dirname});
})
//Waits for a Get request with base url + '/hello'
app.get('/hello',(req,res)=>{
  res.sendFile('./hello.html',{root: __dirname});

})
//Waits for a Get request with base url + '/world'
app.get('/world',(req,res)=>{
  res.sendFile('./world.html',{root: __dirname});
})


app.listen(PORT,()=>{
  console.log('I am running');
})
