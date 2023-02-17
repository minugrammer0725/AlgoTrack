import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { DataSource } from 'typeorm';

// import entities
import { FlashCard } from './src/flashcards/flashcards.entity';
import { CardCategory } from './src/flashcards/categories.entity';

// import routers
import cardsRouter from './src/flashcards/flashcards.router';

// allow to read .env file
dotenv.config();

// instantiate express app
const app: Express = express();

// parse Request body
app.use(bodyParser.json());

// cors
app.use(cors());

// create DB connection
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [FlashCard, CardCategory],
  synchronize: true
});


// define server port
const PORT = process.env.PORT;

// define routes
app.use('/', cardsRouter);  // cards route as default



AppDataSource.initialize().then(() => {
  // listen to requests
  app.listen(PORT, () => {
    console.log('Data Source Initialized. Running server now.');
  });
}).catch((err) => {
  console.error('Error during data source initialization.', err);
});

