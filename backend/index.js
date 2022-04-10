const express = require('express');
const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

const authMiddleware = require('./src/middleware/auth');
const authRoute = require('./src/routes/auth/auth');
const moviesRoute = require('./src/routes/movies/movies');
const userRoutes = require('./src/routes/user/user');
const dotenv = require('dotenv');

dotenv.config();

app.use('/', authRoute);

app.use('/browse', authMiddleware, moviesRoute);

app.use('/YourAccount', authMiddleware, userRoutes);

app.listen(process.env.PORT || 8080, () => {
    console.log("Server Running");
});
