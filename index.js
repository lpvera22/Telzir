require('express-async-error')

const path = require('path');
const config=require('config')
const winston=require('winston')


const express=require('express')
const app=express()
var mongoose= require('mongoose'); 
var cors = require('cors');
app.use(cors());
app.use(express.json())
app.use(express.static(path.join(__dirname, 'build')));
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//     });
mongoose.connect('mongodb+srv://admin:admin123@cluster0.hzfwu.mongodb.net/test',{
    useNewUrlParser:true,useUnifiedTopology:true})

require('./routes')(app);

app.get('/', function(req, res) {
    res.send('root');
  });

winston.add(new winston.transports.File({filename:'logfile.log'}))
var PORT=process.env.port||5000
app.listen(PORT,()=>{
    console.log('listening')
})