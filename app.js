import express from 'express';
import logger from './middleware/logger.js';
import studentRoutes from './routes/studentRoutes.js';

const app = express();

const port = 3000;

app.use(express.json());
app.use(logger);

app.use('/user', studentRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});