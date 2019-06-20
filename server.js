const express = require('express');
const connectDB = require('./config/db');
const app = express();
const path = require('path');

app.get('/', (req, res) => res.json({ msg: 'Hello World' }))
app.get('/admin', (req,res) => {
    console.log('admin page start');
    res.sendFile(path.join(__dirname, 'public', 'admin.html'))
});

//connect Db
connectDB();


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));

//define the routes
app.use('/api/users', require('./routes/user'));
app.use('/api/job', require('./routes/job'));
app.use('/api/auth', require('./routes/auth'));
app.use('/admin', require('./routes/admin'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));