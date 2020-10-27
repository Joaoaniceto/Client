const express = require('express');

const cors = require('cors');

const morgan = require('morgan');

const helmet =  require('helmet');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.static('./client'))

const db = require('monk')('localhost/dbshort');


app.get('/url/:id',(req,res)=>{
    // todo redirect
    })

app.get('/:id',(req,res)=>{
    // todo redirect
    })

app.post('/url',(req,res)=>{
    // todo : create a short url
    const users = db.get('users');
    users.insert({
        url:req.body.url,
        name:req.body.name,
    }),
    res.json({
        message:"done",  
    })
    })



app.listen(1337);