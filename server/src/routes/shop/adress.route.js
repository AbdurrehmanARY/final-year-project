import express from "express"
import { addAddress, deleteAddress, editAddress, fetchAllAddress } from "../../controller/shop/adress.controller.js";
import { isAuth } from "../../middleware/auth.middleware.js";



const router = express.Router();
router.post("/add-adress", addAddress);
router.get("/get-adress/:userId", fetchAllAddress);
router.delete("/delete-adress/:userId/:addressId", deleteAddress);
router.put("/update-adress/:userId/:addressId", editAddress);

export default router;