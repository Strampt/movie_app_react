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
			user = await User.create({ email, password: hashedPassword });
			return res.status(201).json(user);
		}
		return res.status(200).json({ user, message: 'User already exists' });
	}
};
