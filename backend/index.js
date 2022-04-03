const express = require('express');
const app = express();
const authMiddleware = require('./src/middleware/auth');
const authRoute = require('./src/routes/auth/auth');
const moviesRoute = require('./src/routes/movies/movies');
const userRoutes = require('./src/routes/user/user');
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());

app.use('/', authRoute);

app.use('/browse', authMiddleware, moviesRoute);

app.use('/YourAccount', authMiddleware, userRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server Running");
});
