const express = require('express')
const morgan = require('morgan')
const serveFavicon = require('serve-favicon')
const Sequelize = require('./db/sequelize')
const cors = require('cors')
const app = express()
const port = 3005

app.use((req, res, next) => {
 res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
 res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
 next();
 });

sequelize.initDb();

app
 .use(morgan('dev'))
 .use(serveFavicon(__dirname + '/favicon.ico'))
 .use(express.json())
 .use(cors());

const reservationRouter = require('./routes/reservationRoutes')
const pizzaRouter = require('./routes/pizzaRoutes')
const pizzaCategoryRouter = require('./routes/pizzaCategoryRoutes')

app.use('/api/pizzaCategory', pizzaCategoryRouter)
app.use('/api/pizza', pizzaRouter)
app.use('/api/reservation', reservationRouter)

app.listen(port, () => {
 console.log(`L'application écoute le port ${port}`)
})