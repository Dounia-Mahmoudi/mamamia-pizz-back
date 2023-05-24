const express = require('express');
const morgan = require('morgan');
const serveFavicon = require('serve-favicon');
const sequelize = require('./db/sequelize');
const cors = require('cors');

const app = express();
const port = 3007;

app
  .use(morgan('dev'))
  .use(serveFavicon(__dirname + '/favicon.ico'))
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

sequelize
  .initDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`L'app sur le port ${port}`);
    });
  })
  .catch(error => {
    console.error('Erreur lors de l\'initialisation de la base de données :', error);
    // Ajoutez ici le code pour renvoyer une réponse d'erreur appropriée au client
    // Par exemple, vous pouvez utiliser le middleware pour gérer les erreurs et renvoyer une réponse JSON avec un code d'erreur
    app.use((err, req, res, next) => {
      res.status(500).json({ message: 'Erreur serveur' });
    });
  });
