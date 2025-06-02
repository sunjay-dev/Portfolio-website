require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:5173', 
  methods: ['POST'],
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());

const emailRouter = require('./router/email.router.js');
app.use('/api', emailRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running at PORT:${PORT}`);
});