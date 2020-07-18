const express = require('express');
const bodyParser= require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
var knex = require('knex')

const register  = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile'); 
const image = require('./controllers/image'); 



const db= knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'esh1995',
    password : 'your_database_password',
    database : 'facemap-db'
  }
});

	// db.select('*').from('users').then(data => {
	// 	console.log(data)
	// });

const app = express();

app.use(cors());
app.use(cors({origin: '*'}));
app.use(express.json());


app.get('/',(req,res) =>{
	res.send(database.users);
})

app.post('/signin', (req,res) => {signin.handleSingin(req,res, db, bcrypt)})

app.post('/register', (req, res) =>  {register.handleRegister(req,res, db, bcrypt)})

app.get('/profile/:id', (req,res) => {profile.handleProfile(req,res,db)})

app.put('/image', (req,res) => {image.handleImagePut(req,res, db)})

app.post('/imageurl', (req,res) => {image.handleApiCall(req,res)})

app.listen(3001, ()=>{
	console.log("App is running !");
});


/*
/ -> this is working 
/signin -> POST = success or fail 
/register -> POST = users
/profile/userid  -> GET request - get users info using the users id 
/image -> PUT -> users 
*/