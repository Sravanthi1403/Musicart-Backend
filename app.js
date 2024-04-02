const express = require('express');
const app = express();
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoute');
const productRoutes = require('./routes/productRoute');
const orderRoutes = require('./routes/orderRoute');
const cartRoutes = require('./routes/cartRoute');
const feedbackRoutes = require('./routes/feedbackRoute');
const {errorMiddleware} = require("./utils/ErrorHandler");
const cookieParser = require('cookie-parser');
const cors = require("cors");

dotenv.config({path: './.env'});
app.use(cookieParser());
app.use(cors({
    origin : 'https://client-musicart-fjpgw6ms8-sravanthis-projects-bdbcceab.vercel.app',
    methods : [ "GET","POST","PUT","PATCH", "DELETE" ],
    credentials : true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.json({
        success : true,
        message : 'Server is working fine'
    })
})
// routes 

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/cart', cartRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/feedbacks', feedbackRoutes);


module.exports = app
