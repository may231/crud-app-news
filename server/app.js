const express = require('express');
const path = require('path');
const cors = require('cors');
const articleRouter = require('./routes/articles');
const eventRouter = require('./routes/events');

const app = express()

//middleware
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/api/events', eventRouter);
app.use('/api/articles', articleRouter);

app.use((err, req, res) => {
   console.log("error is", err.status);
   res.send(err.message); 
})

app.use(cors());

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;
