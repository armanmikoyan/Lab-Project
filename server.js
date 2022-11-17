const express = require('express')
const fs = require('fs')
const path = require('path')



const app = express()


app.listen(3000,(err)=>{
	err ? console.log(err) : console.log('listening 3000 port')
})

app.use(express.static('Front'))
app.use(express.json())


app.use(express.urlencoded({extended: false}))




app.get('/',(req,res)=>{
	res.sendFile(path.resolve("index.html"))	
})


app.post('/',(req,res)=>{
const id = 	Date.now()
const newCustomer ={
	id,
	...req.body
}
const data = fs.readFileSync(path.resolve("Front/data.json"),'utf8')
let arr = JSON.parse(data)
arr.push( JSON.stringify(req.body))

fs.writeFileSync(path.resolve("Front/data.json"),data +JSON.parse(arr))

})

