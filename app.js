import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/connect.js';
import { PORT } from './config/config.js';
import userRoutes from './routes/user.js';
import busRoutes from './routes/bus.js';
import ticketRoutes from './routes/ticket.js';
import { buildAdminJS } from './config/setup.js';

dotenv.config();
const app = express();

// CORS configuration
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

app.use(express.json());

// Routes
app.use('/user', userRoutes);
app.use('/bus', busRoutes);
app.use('/ticket', ticketRoutes);

app.get('/', (req, res) => res.send('hi from home'));

// Initialize database and AdminJS
const initializeApp = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await buildAdminJS(app);
        console.log('Database and AdminJS initialized');
    } catch (error) {
        console.error('Error initializing app:', error);
    }
};

// Run initialization
initializeApp();

// Export the app for Vercel
export default app;