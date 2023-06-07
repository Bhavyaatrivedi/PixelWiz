import express from 'express';
import cors from 'cors'
import * as dotenv from 'dotenv';

dotenv.config();

const app= express();
app.use(cors());
app.use(express.json({ limit: '50mb'}));

app.get('/', async (req,res) =>{
    res.send("Hello from PixelWiz")
})

const startServer = async () => {
    app.listen(8800, () => console.log('Server is running on port http://localhost:8800'))
}

startServer();