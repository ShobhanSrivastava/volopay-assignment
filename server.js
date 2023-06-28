// package imports
import express from 'express';
import bodyParser from 'body-parser';

// file imports
import { PORT } from './config/envConfig.js';
import { apiRouter } from './routers/index.js';

// create server
const app = express();

// parse json data in the request body
app.use(express.json())
// parse url encoded data in request body for form data
app.use(bodyParser.urlencoded( { extended: false } ));

// Route the requests with /api prefix to the apiRouter
app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Listen to incoming requests
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});

