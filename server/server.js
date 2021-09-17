/*
* Starts Sever on port below
* Uses Express Router to handle:
*   JSON Parsing / URL Encoding
*   Static file routing
*   Internal API Routing
*   404 Error Handling
*   Internal Error Handling
*   Port Listening
*/
import { resolve } from 'path';
import express, { json, urlencoded, static } from 'express';

const app = express();

import apiRouter from './routes/api';

const PORT = 3000;

/**
 * handle parsing request body
 */
app.use(json());
app.use(urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
app.use(static(resolve(__dirname, '../client')));

/**
 * define route handlers
 */
app.use('/api', apiRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

/**
 * express error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */

app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});

export default app;
