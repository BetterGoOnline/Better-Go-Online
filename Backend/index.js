import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import connectDB from './config/db.js';

const app = express();


// Middleware
app.use(cors());
app.use(express.json());

connectDB();

import subscriberRoutes from './routes/subscriberRoute.js';
app.use('/api/subscribers', subscriberRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});