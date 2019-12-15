const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

require('dotenv').config();
const mongoConnect = process.env.MONGO_CONNECT;
const port = process.env.PORT;

const app = express();
// ligação para o mongodb atlas
mongoose.connect(mongoConnect, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
// assim o express sabe que é para usar json
app.use(express.json());
app.use(routes);
app.listen(port);

/*
52:52 2-criando a base
yarn run dev 
*/
