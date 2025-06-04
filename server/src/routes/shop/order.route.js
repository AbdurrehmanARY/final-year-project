import express from 'express';
import { confirmPayment, createOrder,  getAllOrderByUser, getOrderDetail } from '../../controller/shop/order.controller.js';
const router = express.Router();

// router.post("/create-order", createOrder);
// // router.post("/capture", capturePayment);
// router.get("/get-byUser/:userId", getAllOrderByUser);
// router.get("/get-byAdmin/:userId", getAllOrderByAdmin);

// router.get("/details/:id",getOrderDetail);

router.post("/create-order", createOrder);
router.post("/confirm-payment", confirmPayment);

router.get("/get-byUser/:id", getAllOrderByUser);
router.get("/order-details/:userId/:orderId",getOrderDetail);


export default router