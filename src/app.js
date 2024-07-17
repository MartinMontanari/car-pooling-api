import express from 'express';
import bodyParser from 'body-parser';
import getStatusRoutes from './routes/getStatusRoutes.js';

//* Here I init the express app
const app = express();

/**
 * * Parse request of content-type: application/json
 * * Parses inconming request with JSON payloads
*/
app.use(bodyParser.json());
app.use(express.urlencoded({ extended:true }));

//* mapping routes
app.use(getStatusRoutes);


export default app;