const express = require('express');

const cors = require('cors');

const morgan = require('morgan');

const helmet =  require('helmet');

const app = express();

const monk = require('monk')


const db = monk('localhost:27017/dbshort');

const collection = db.get('dbshort');

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.static('./client'));


app.get('/url/:id',(req,res)=>{
    // todo redirect
    })

app.get('/:id', async (req,res)=>{
    const {id: id} = req.params;
    try{
    var a = await collection.findOne({name: id});
    console.log(a); 
    if(a){
        return res.redirect(a.url);

    }

    } catch(err){
console.log(err);
    }
    })

app.post('/url',(req,res)=>{
  collection.insert({
      url:req.body.url,
      name:req.body.name,
  }).then(()=>{db.close()});
  res.json({
    url:req.body.url,
    name:req.body.name,
  })
    })

app.listen(1337);