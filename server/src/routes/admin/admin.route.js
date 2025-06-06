import express from "express";
import { addProduct, deleteProduct, editProduct, fetchAllProducts, handleImageUpload } from "../../controller/admin/product.controller.js";
import { upload } from "../../middleware/multer.js";
import { isAuth } from "../../middleware/auth.middleware.js";


const router = express.Router();
 
router.post("/upload", upload.single("productImage"),handleImageUpload)
router.post("/add",addProduct)
router.put("/edit/:id",editProduct)
router.delete("/delete/:id",deleteProduct)
router.get("/all",fetchAllProducts)



export default router

