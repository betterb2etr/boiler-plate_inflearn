const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://inflearn:abcd1234@cluster0.ndbja27.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, 
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


//3강인데... 잘 몰것다

app.get('/',(req,res) => res.send('Hello World'))
app.listen(port, () => console.log(`Example app listening on ${port} `))//???
