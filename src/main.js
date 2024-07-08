const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
var methodOverride = require('method-override')
const app = express()
const port = 3000

const route = require('./routes')

const db = require('./config/db')

//connect to DB
db.connect();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// override with POST having ?_method=PUT
app.use(methodOverride('_method'))

//HTTP logger
//app.use(morgan('combined'));

//template engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './src/resources/views');

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})