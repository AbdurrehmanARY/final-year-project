import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import OrderDetail from "./product/OrderDetail";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "@/store/shop/order";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import OrderTrackingDialog from "./OrderTrackingDialog";


export const OrderList = ({ orderList }) => {
  const {isAuthenticated,user}=useSelector((state)=>state.auth)
    const {orderDetails}=useSelector((state)=>state.shopOrder)
    console.log('order detail is',orderDetails)
  
const dispatch=useDispatch()
 
    // const userId=user?.id
    // // const orderId=orderList
    // console.log(userId,orderId)
    // dispatch(getOrderDetails(userId,orderId))

    
  // const response=  dispatch(getProductDetail)
//   useEffect(()=>{
// const getOrder=async()=>{
// const response =await dispatch(getOrderDetails({userId,orderId}))
// console.log('order details',response)

// } 
// getOrder()   
//   })

console.log('order list is',orderList)

  const getOrder=async(orderId)=>{
    const userId=user?.id

const response =await dispatch(getOrderDetails({userId,orderId}))

     
    }
  return (
    <>
      {/* Mobile View */}
      {/* <div className="md:hidden space-y-6">
        {orderList.map((order,index) => (
          <div key={index} className="border-b pb-6">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                <img 
                  src={order.image} 
                  alt={order.productName} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">order</h3>
                <div className="text-gray-500">
                {order.category}
                </div>
                <div className="text-sm mt-1">order date</div>
                <div className="text-sm text-gray-500">
                  Ref Number <span>{order.id}</span>
                </div>
                <div className="font-bold mt-1">Rs.{order.total}</div>
              </div>
            </div>
            <div className="mt-4">
               <OrderDetail
               orderDetails={orderDetails}
             
               
              trigger={<Button variant="outline" className="rounded-full border-[#E16F3D] text-[#E16F3D] hover:text-[#E16F3D]">
                Track Order
              </Button>}
              />
            </div>
          </div>
        ))}
      </div> */}

      {/* Desktop View - Shadcn Table */}
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead className="text-left">Date</TableHead>
              <TableHead>Ref Number</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orderList.map((order) => (
              <TableRow className='text-start' key={order.id}>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden">
                      <img
                        src={order?.items?.[0]?.image}
                        alt={order?.items?.[0]?.productName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{order?.items?.[0]?.productName}</h3>
                      <div className="text-gray-500">{order?.items?.[0]?.productCategory}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  {order?.createdAt ? format(new Date(order?.createdAt), "dd MMM yyyy") : ""}
                </TableCell>
                <TableCell>{order?.id}</TableCell>
                <TableCell>Rs.{order?.total}</TableCell>
                <TableCell className="text-right">
                  {/* <OrderDetail
                    orderDetails={orderDetails}
                    trigger={
                      <Button
                        onClick={() => getOrder(order?.id)}
                        variant="outline"
                        className="rounded-full border-[#E16F3D] text-[#E16F3D] hover:text-[#E16F3D]"
                      >
                        Track Order
                      </Button>
                      
                    }
                  /> */}
                   <OrderTrackingDialog orderDetails={order} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};
