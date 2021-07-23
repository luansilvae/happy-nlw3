import express from 'express';
import path from 'path'
require('dotenv/config');
import 'express-async-errors'
import cors from 'cors'

import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';

const PORT = process.env.PORT_SERVER;

const app = express();


app.use(express.json());
app.use(cors())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)


app.listen(PORT, () => {
  console.log(`Server runing on port: ${PORT}`);
});
