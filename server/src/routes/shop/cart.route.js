import express from "express";
import { addToCart, deleteCart, fetchCart, updateCart } from "../../controller/shop/cart.controller.js";



const router = express.Router();

// router.post("/add", addToCart);
// router.get("/get/:userId", fetchCartItems);
// router.put("/update-cart", updateCartItemQty);
// router.delete("/:userId/:productId", deleteCartItem);



router.post("/add-cart", addToCart);
router.get("/get-cart", fetchCart);
router.put("/update-cart", updateCart);
router.delete("/delete-cart", deleteCart);
export default router;