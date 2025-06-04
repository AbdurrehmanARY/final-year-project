import React, { useEffect } from 'react'
// import { columns } from "./columns";
// import { columns } from '@/components/admin/order/OrderColumn';
import columns from '../../components/admin/order/OrderColumn'
import OrderDataTable from '@/components/admin/order/OrderDataTable';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrdersByAdmin } from '@/store/admin/order';

// import ProductDataTable from '@/components/admin/product/ProductDataTable';

// const orders = [
//   {
//     id: "ORD-7291",
//     date: "May 8, 2025",
//     customer: "Alex Johnson",
//     user:{
//       email: "alex.johnson@example.com"
//     },
//     status: "completed",
//     amount: 154.64,
//     // items: 2,
//   }
  
// ];

function AdminOrders() {
const dispatch=useDispatch()
  const {orderList}=useSelector((state)=>state.adminOrder)
    const {isAuthenticated,user}=useSelector((state)=>state.auth)
    const userId=user?.id
 useEffect(()=>{
    const getOrder=async()=>{
    const response=await dispatch(getAllOrdersByAdmin({userId}))
    console.log(response?.payload?.data)
 
    }
    getOrder() 
   },[dispatch,user])
   console.log(orderList,'ordrr list ')

  return (
   <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Orders</h2>
        <p className="text-muted-foreground">Manage and track customer orders</p>
      </div>
      {/* <DataTable columns={columns} data={orders} /> */}
      <OrderDataTable columns={columns} data={orderList}/>
    </div>
  )
}

export default AdminOrders


// Sample data

















// const orders = [
//   {
//     id: "ORD-7291",
//     date: "May 8, 2025",
//     customer: "Alex Johnson",
//     email: "alex.johnson@example.com",
//     status: "completed",
//     amount: 154.64,
//     items: 2,
//   },
//   {
//     id: "ORD-7292",
//     date: "May 7, 2025",
//     customer: "Sarah Williams",
//     email: "sarah.w@example.com",
//     status: "processing",
//     amount: 89.99,
//     items: 1,
//   },
//   {
//     id: "ORD-7293",
//     date: "May 7, 2025",
//     customer: "Michael Brown",
//     email: "michael.b@example.com",
//     status: "pending",
//     amount: 245.5,
//     items: 3,
//   },
//   {
//     id: "ORD-7294",
//     date: "May 6, 2025",
//     customer: "Emily Davis",
//     email: "emily.d@example.com",
//     status: "completed",
//     amount: 124.95,
//     items: 2,
//   },
//   {
//     id: "ORD-7295",
//     date: "May 6, 2025",
//     customer: "James Wilson",
//     email: "james.w@example.com",
//     status: "cancelled",
//     amount: 199.99,
//     items: 1,
//   },
//   {
//     id: "ORD-7296",
//     date: "May 5, 2025",
//     customer: "Olivia Martinez",
//     email: "olivia.m@example.com",
//     status: "processing",
//     amount: 349.75,
//     items: 4,
//   },
//   {
//     id: "ORD-7297",
//     date: "May 5, 2025",
//     customer: "Daniel Taylor",
//     email: "daniel.t@example.com",
//     status: "completed",
//     amount: 79.99,
//     items: 1,
//   },
//   {
//     id: "ORD-7298",
//     date: "May 4, 2025",
//     customer: "Sophia Anderson",
//     email: "sophia.a@example.com",
//     status: "pending",
//     amount: 159.95,
//     items: 2,
//   },
//   {
//     id: "ORD-7299",
//     date: "May 4, 2025",
//     customer: "Ethan Thomas",
//     email: "ethan.t@example.com",
//     status: "completed",
//     amount: 299.99,
//     items: 3,
//   },
//   {
//     id: "ORD-7300",
//     date: "May 3, 2025",
//     customer: "Ava Jackson",
//     email: "ava.j@example.com",
//     status: "processing",
//     amount: 129.5,
//     items: 2,
//   },
//   {
//     id: "ORD-7301",
//     date: "May 3, 2025",
//     customer: "Noah White",
//     email: "noah.w@example.com",
//     status: "cancelled",
//     amount: 189.99,
//     items: 1,
//   },
//   {
//     id: "ORD-7302",
//     date: "May 2, 2025",
//     customer: "Isabella Harris",
//     email: "isabella.h@example.com",
//     status: "completed",
//     amount: 219.95,
//     items: 3,
//   },
// ];


