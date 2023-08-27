const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT;
const { mongoose } = require('mongoose');


// database connecting
mongoose.connect(process.env.URI)
    .then(() => console.log('Database Is Connected'))
    .catch((err) => console.log('Not Connected', err));

const app = express()
app.use(cors())

app.use(express.json());
app.use('/', require('./routes/authRoutes'));


app.listen(port, () => console.log(`Server at ${port}`));