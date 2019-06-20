const express = require('express');
const connectDB = require('./config/db');
const app = express();

app.get('/', (req, res) => res.json({ msg: 'Hello World' }))

//connect Db
connectDB();


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));

//define the routes
app.use('/api/users', require('./routes/user'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/auth', require('./routes/auth'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));