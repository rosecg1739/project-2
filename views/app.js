const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(expressurlencoded({extended: true}));
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const routes = require('./srever/routes/reciepeRoutes.js')
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
