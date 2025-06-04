
import cors from 'cors';
import dotenv from 'dotenv';

import cookieParser from 'cookie-parser';

import express from "express";
import authRoute from "./routes/auth.route.js"
import adminRoute from "./routes/admin/admin.route.js"
import shopRoute from "./routes/shop/cart.route.js"
import adressRoute from './routes/shop/adress.route.js'
import orderRoute from "./routes/shop/order.route.js"
import adminOrderRoute from './routes/admin/order/order.route.js'
import reviewRoute from "./routes/shop/review.route.js"
import filterRoute from './routes/shop/product.route.js'
import searchRoute from "./routes/shop/search-route.js"
dotenv.config()
const PORT = process.env.PORT || 5000;

const app = express();
const corsOptions = {
  origin: 'http://localhost:5173', // Allow only this origin
  credentials: true, // Allow cookies and credentials
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};
app.use(cors(corsOptions));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
// app.use("/api/v1/auth",authRoute)
app.use("/api/v1/auth",authRoute);
app.use("/api/v1/admin",adminRoute)
app.use("/api/v1/shop",shopRoute)
app.use("/api/v1/adress",adressRoute)
app.use("/api/v1/order",orderRoute)
app.use("/api/v1/admin-order",adminOrderRoute)
app.use("/api/v1/review",reviewRoute)
app.use("/api/v1/filter",filterRoute)
app.use("/api/v1/search",searchRoute)







app.listen(5000, () => {
  // console.log('working')
  console.log(`Server is starting on http://localhost:${5000}`);
});


app.get('/', (req,res) => {
  // console.log(`Server is running on http://localhost:${PORT}`);
res.send('working')
});


