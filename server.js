const express = require('express');
const bodyParser= require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const app = express();


const database= {
	users:[
		{
			id: '1',
			name: 'Matt',
			email: 'matta@gmail.com',
			password: 'robocop',
			entries: 0,
			joined: new Date()
		},
		{
			id: '2',
			name: 'Jessica',
			email: 'jessica101@gmail.com',
			password: 'superbad',
			entries: 0,
			joined: new Date()
		}
	]
}
app.use(cors());
app.use(cors({origin: '*'}));
app.use(express.json());


app.get('/',(req,res) =>{
	res.send(database.users);
})

app.post('/signin', (req, res) => {
  if (req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
    res.send(database.users[0]);
  } else {
    res.json('access denied');
  }
})

app.post('/register', (req,res) => {
	// const {name, email, password} = req.body;
	database.users.push({
			id: '14',
			name: req.body.name,
			email: req.body.email,
			entries: 0,
			joined: new Date()
		})
	res.json(database.users[database.users.length-1]);
})

app.get('/profile/:id', (req,res) => {
	const{id} = req.params;
	let user_found= false;
	database.users.forEach( user => {
		if(user.id === id){
			user_found=true;
			return res.json(user);
		}
	})
	if(!found){
		res.status(404).json('No user found');
	}})

app.put('/image', (req,res) => {
	const {id} = req.body;
	let user_found = false;
	database.users.forEach(user => {
		if(user.id === id){
			user.entries++;
			return res.json(user.entries);
		}
	})
	if(!found){
		res.json('No user found ');
	}
})

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