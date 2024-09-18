import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();

app.use(express.json()); //middleware that accepts json data in the request body


app.use('/api/products', productRoutes); //routing all features with /api/products prefix

app.listen(5000, () => {
    connectDB();
    console.log('Server is running on http://localhost:5000');
});