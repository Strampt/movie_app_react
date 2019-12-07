const User = require('../models/User');
// index, show, store, update, destroy

module.exports = {
	async store(req, res) {
		const { email, password } = req.body;

		const user = await User.create({ email, password });

		return res.json(user);
	}
};
