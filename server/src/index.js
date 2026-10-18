import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoutes from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
dotenv.config()



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send("Api is running!");
})

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server is listening on the port: ${PORT}`);
    });
};

startServer();
