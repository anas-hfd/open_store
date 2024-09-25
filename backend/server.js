import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import path from 'path';

import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve(); 

app.use(express.json()); //middleware that accepts json data in the request body


app.use('/api/products', productRoutes); //routing all features with /api/products prefix

// make the dist folder a static asset if in production (after running the vite build command in frontend)
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
    }); //serving the index.html file to render the frontend in production
}

app.listen(5000, () => {
    connectDB();
    console.log('Server is running on http://localhost:5000');
});