const User = require('../models/User');
const bcrypt = require('bcrypt');
// index, show, store, update, destroy

module.exports = {
	async store(req, res) {
		const { email, password } = req.body;
		const saltRounds = 10;

		let user = await User.findOne({ email });

		if (!user) {
			bcrypt.hash(password, saltRounds, async function(err, hash) {
				if (err) {
					throw err;
				} else {
					user = await User.create({ email, password: hash });
					//console.log(user);
				}
			});
		}
		return res.json(user);
	}
};
