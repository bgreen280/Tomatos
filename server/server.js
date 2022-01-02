const path = require('path');
const express = require('express')

const app = express();
const apiRouter = require('./routes/api')
const PORT = 3000;

// pars json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static files
app.use(express.static(path.resolve(__dirname, '../client')));

// define route handlers
app.use('/api', apiRouter);

// catch-all route handler for any requests to an unknown route
app.use((_req, res) => res.status(404).send('Page not found'));

// error handler
app.use((err, _req, res, _next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});
