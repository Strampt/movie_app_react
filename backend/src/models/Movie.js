const mongoose = require('mongoose');
const Float = require('mongoose-float').loadType(mongoose, 1);

const MovieSchema = new mongoose.Schema({
	imdbid: String,
	title: String,
	year: Number,
	type: String,
	poster: String,
	released: Date,
	runtime: String,
	genre: String,
	plot: String,
	imdbrating: Float,
	director: String
});

module.exports = mongoose.model('Movie', MovieSchema);
