const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(routes);
app.listen(3333);

/*
27:57 2-criando a base
yarn run dev 
*/
