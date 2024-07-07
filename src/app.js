import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import employeeRoutes from './routes/employeeRoutes.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use('/api', employeeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
