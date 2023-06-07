import express from 'express';
import cors from 'cors'
import * as dotenv from 'dotenv';
import connectDb from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app= express();
app.use(cors());
app.use(express.json({ limit: '50mb'}));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req,res) =>{
    res.send("Hello from PixelWiz")
})

const startServer = async () => {
    try{
        connectDb(process.env.MONGODB_URL);
        app.listen(8800, () => console.log('Server is running on port http://localhost:8800'))
    } catch(error){
        console.log(error);
    }
    
}

router.route('/'.post(async(req,res) =>{
    try{
        const {prompt}= req.body;

        const aiResponse = await openai.createImage({
            prompt,
            n:1,
            size: '1024X1024',
            response_format: 'b64_json'
        })

        const image = aiResponse.data.data[0].b64_json;

        res.status(200).json({photo: image})
    }catch(error){
        console.log(error);
        res.status(500).send(error?.response.data.error.message)
    }
}))
startServer();