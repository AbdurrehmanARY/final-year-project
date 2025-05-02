import React from 'react'
import { OrderList } from '../../../components/shop/OrderList';

function Orders() {

    // Mock data for orders
const orders = [
    {
      id: 1,
      name: "Winter Coat",
      color: "Beiges",
      size: "M",
      date: "Thursday, May 11 2023",
      refNumber: "0981727198201",
      price: 124.99,
      image: "/lovable-uploads/44e1025b-fe52-4646-aafb-9e68d60c2921.png"
    },
    {
      id: 2,
      name: "Autumn Dress",
      color: "Beiges",
      size: "M",
      date: "Thursday, May 11 2023",
      refNumber: "0981727198201",
      price: 124.99,
      image: "/lovable-uploads/e6d65847-6951-4f97-abda-379090c971c2.png"
    },
    {
      id: 3,
      name: "Casual T-Shirt",
      color: "Beiges",
      size: "M",
      date: "Thursday, May 11 2023",
      refNumber: "0981727198201",
      price: 124.99,
      image: "/lovable-uploads/03b8416e-6c88-4526-9b03-1ec5e8d02296.png"
    }
  ];
  return (
    <>
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8">Order Tracking</h1>
      <OrderList orders={orders} />
    </div>
    </>
  )
}

export default Orders