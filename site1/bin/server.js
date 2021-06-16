const express = require('express')
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')
const app = express()

// Create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs/example.log'), { flags: 'a' })

// Setup the logger
app.use(morgan('combined', { stream: accessLogStream }));

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Service listening on port ${port}`));
