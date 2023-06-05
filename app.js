const express = require('express');
const morgan = require('morgan');
// const serveFavicon = require('serve-favicon');
const cors = require('cors');
const app = express();
const port = 3007;

app
  .use(morgan('dev'))
  // .use(serveFavicon(__dirname + '/favicon.ico'))
  .use(express.json())
  .use(cors());

const reservationRouter = require('./routes/reservationRoutes');
const userRouter = require('./routes/userRoutes');
const pizzaRouter = require('./routes/pizzaRoutes');
const pizzacategoryRouter = require('./routes/pizzacategoryRoutes');

app
  .use('/api/reservations', reservationRouter)
  .use('/api/users', userRouter)
  .use('/api/pizzas', pizzaRouter)
  .use('/api/pizzacategory', pizzacategoryRouter);

app.listen(port, () => {
  console.log(`L'app sur le port ${port}`);
});
