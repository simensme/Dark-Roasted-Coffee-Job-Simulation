import express from 'express';
import coffeeRoutes from './routes/coffeeRoutes';
import cors from 'cors';

const app = express();
const port = 2500;

app.use(cors());

// Add the coffeeRoutes middleware
app.use('/api', coffeeRoutes);

// Port listening
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});