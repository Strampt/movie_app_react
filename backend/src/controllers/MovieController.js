const Movie = require('../models/Movie');

module.exports = {
	async store(req, res) {
		const { imdbid, title, year, type, poster, released, runtime, genre, plot, imdbrating, director } = req.body;

		const movie = await Movie.create({
			imdbid,
			title,
			year,
			type,
			poster,
			released,
			runtime,
			genre,
			plot,
			imdbrating,
			director
		});

		return res.json(movie);
	}
};
