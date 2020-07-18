const handleProfileGet = (req,res, db) => {
	const{id} = req.params;
	db.select('*').from('users').where({
		id:id
	})
		.then(user => {
			if(user.length){
				res.json(user[o])
			}
			else{
				res.status(400).json('user Not found')
			}
		})
			.catch(err => res.status(400).json('erro getting user'))
	// if(!found){
	// 	res.status(404).json('No user found');
	// }
}

module.exports = {
	handleProfileGet: handleProfileGet
}