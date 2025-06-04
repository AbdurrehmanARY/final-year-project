import express from "express";
import { addToCart, deleteCart, fetchCart, updateCart } from "../../controller/shop/cart.controller.js";
import { isAuth } from "../../middleware/auth.middleware.js";



const router = express.Router();

// router.post("/add", addToCart);
// router.get("/get/:userId", fetchCartItems);
// router.put("/update-cart", updateCartItemQty);
// router.delete("/:userId/:productId", deleteCartItem);



router.post("/add-cart", addToCart);
router.get("/get-cart/:id", fetchCart);
router.put("/update-cart/:id", updateCart);
router.delete("/delete-cart/:userId/:productId", deleteCart);
export default router;