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


app.get('/url/:id',(req,res)=>{
    // todo redirect
    })

app.get('/:id',(req,res)=>{
    // todo redirect
    })

app.post('/url',(req,res)=>{
   
    })



app.listen(1337);