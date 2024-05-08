import express from 'express';
import userRoutes from './routes/user/user.js'
import { connectDB } from './utils/db/mongo.js';
import { logger } from './utils/logger/logger.js';
const app = express();

app.use(express.urlencoded())

app.use(express.json());
const PORT = process.env.PORT || 3001

app.use('/api', userRoutes)

connectDB();

app.listen(PORT, () => {
    logger.error('something went wrong')
    logger.info('server is running on port 3001')
})