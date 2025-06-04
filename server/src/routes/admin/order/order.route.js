
import express from 'express';
// import { getAllOrderByAdmin } from '../../../controller/shop/order.controller.js';
import { getAllOrdersByAdmin, getOrderDetailsForAdmin, updateOrderStatus } from '../../../controller/admin/order/order.controller.js';
const router = express.Router();
router.get("/get-order-for-admin/:userId", getAllOrdersByAdmin);
router.get("/details-for-admin/:userId/:orderId", getOrderDetailsForAdmin);
router.put("/update/:userId/:orderId", updateOrderStatus);


export default router