import express from "express";
import { getFilteredProducts } from "../../controller/shop/product.controller.js";
const router = express.Router();

router.get("/filter-product", getFilteredProducts);
export default router;