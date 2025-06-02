
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import connectDB from '../config/connect.js'
import { PORT } from '../config/config.js'
import userRoutes from '../routes/user.js'
import busRoutes from '../routes/bus.js'
import ticketRoutes from '../routes/ticket.js'
// import { buildAdminJS } from '../config/setup.js'


dotenv.config()
const app = express()

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions))

app.use(express.json())

//Routes
app.use('/user', userRoutes);
app.use('/bus', busRoutes);
app.use('/ticket', ticketRoutes);

app.get('/', (req, res)=> res.send("hi from home"))

const start = async () => {
    try {
        connectDB(process.env.MONGO_URI)
        // await buildAdminJS(app);
        app.listen({port: PORT, host: '0.0.0.0'}, (err, addr)=>{
            if (err) {
                console.log(err);
            } else {
                console.log(`Server started on http://localhost:${PORT}`);
            }
        })
    } catch (error) {
        console.log('Error Starting Server', error);
        
    }
}

start()