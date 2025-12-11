
import express from 'express'
const app = express();

app.get('/', (req , res)=>{
    console.log('res is running');
})

app.listen(5000 , ()=>{
    console.log("app is running at 5000 port")
})