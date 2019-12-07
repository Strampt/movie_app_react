const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omni-bpbfv.mongodb.net/movies?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);
app.listen(3333);

/*
51:00 2-criando a base
yarn run dev 
*/
