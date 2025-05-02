import express from "express";
import { loginUser, registerUser, logoutUser, myProfile} from "../controller/auth/auth.controller.js";
import { isAuth } from "../middleware/auth.middleware.js";
// import {  } from "../../../../e commerece/mern-ecommerce-2024/server/controllers/auth/auth-controller.js";
const router = express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/my-profile",isAuth, myProfile);





export default router;