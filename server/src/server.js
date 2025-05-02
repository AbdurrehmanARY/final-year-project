
import cors from 'cors';
import dotenv from 'dotenv';

import cookieParser from 'cookie-parser';

import express from "express";
import authRoute from "./routes/auth.route.js"
import adminRoute from "./routes/admin/admin.route.js"
import shopRoute from "./routes/shop/cart.route.js"
dotenv.config()

const PORT = process.env.PORT;

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
app.use("/api/v1/auth",authRoute)
app.use("/api/v1/admin",adminRoute)
app.use("/api/v1/shop",shopRoute)



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
