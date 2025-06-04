import React, { useEffect } from 'react'
import { OrderList } from '../../../components/shop/OrderList';
import { useDispatch } from 'react-redux';
import { getAllOrdersByUser } from '@/store/shop/order';

function Orders() {
const dispatch=useDispatch()
  const {user}=useSelector((state)=>state.auth)



    // Mock data for orders
const orders = [
    {
      id: 1,
      name: "Winte",
      color: "Be",
      size: "M",
      date: "Thursday, May 11 2023",
      refNumber: "0981727198201",
      price: 124.99,
      image: "/lovable-uploads/44e1025b-fe52-4646-aafb-9e68d60c2921.png"
    }
  ];
  return (
    <>
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8">Order Tracking is now start</h1>
      <OrderList orders={orders} />
    </div>
    </>
  )
}

export default Orders