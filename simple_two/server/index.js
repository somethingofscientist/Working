const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.get('/', (req, res) => {
    res.json({ message: 'Test API' })
})


app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`)
})