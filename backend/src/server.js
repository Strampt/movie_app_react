const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
// ligação para o mongodb atlas
mongoose.connect('mongodb+srv://omnistack:omnistack@omni-bpbfv.mongodb.net/movies?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
// assim o express sabe que é para usar json
app.use(express.json());
app.use(routes);
app.listen(3333);

/*
52:52 2-criando a base
yarn run dev 
*/
