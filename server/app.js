const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//Dependencies Setup
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(cors())


//MONGOOSE SETUP
mongoose.connect("mongodb://localhost/events", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database Connected')
}).catch(err => {
    console.error('Database starting error:', err.stack);
});

//ROUTES 
const userRoutes=require('./routes/userRoutes')
const eventRoutes=require('./routes/eventRoutes')

app.use(eventRoutes);
app.use('/auth',userRoutes);

app.use((req,res,next)=>{
    res.status(404).send('Page Not Found')
})


app.listen(8081, (req, res) => {
    console.log("Server Has Started..!!!")
});