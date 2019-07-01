const express = require('express');
const connectDB = require('./config/db');
const app = express();
const path = require('path');
const cors = require('cors');

app.get('/', (req, res) => res.json({ msg: 'Hello World' }))
app.get('/admin', (req, res) => {
    console.log('admin page start');
    res.sendFile(path.join(__dirname, 'public', 'admin.html'))
});

//connect Db
connectDB();


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));
app.use(cors(
    //{
//     credentials: true,
//     origin: ['localhost:5000']
// }
));

//admin public folder
app.use(express.static('public'));

//define the routes
app.use('/api/user', require('./routes/user'));
app.use('/api/job', require('./routes/job'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/timecard', require('./routes/timecard'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));