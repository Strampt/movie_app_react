const User = require('../models/User');
const bcrypt = require('bcrypt');
// index, show, store, update, destroy

module.exports = {
	async store(req, res) {
		const { email, password } = req.body;
		const saltRounds = 10;

		let user = await User.findOne({ email });

		if (!user) {
			// https://www.twitch.tv/videos/518990850?t=2h2m37s
			let hashedPassword = await bcrypt.hash(password, saltRounds);
			// await faz com que espere que se crie o user e só depois avança
			user = await User.create({ email, password: hashedPassword });
			// retorna o json do user e o http status
			return res.status(201).json(user);
		}
		return res.status(200).json({ message: 'User already exists', user });
	}
};
