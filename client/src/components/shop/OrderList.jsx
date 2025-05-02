import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const OrderList = ({ orders }) => {
  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="border-b pb-6">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                <img 
                  src={order.image} 
                  alt={order.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">{order.name}</h3>
                <div className="text-gray-500">
                  {order.color} <span className="ml-2">{order.size}</span>
                </div>
                <div className="text-sm mt-1">{order.date}</div>
                <div className="text-sm text-gray-500">
                  Ref Number <span>{order.refNumber}</span>
                </div>
                <div className="font-bold mt-1">${order.price}</div>
              </div>
            </div>
            <div className="mt-4">
              <Button variant="outline" className="rounded-full border-[#E16F3D] text-[#E16F3D] hover:text-[#E16F3D]">
                Track Order
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="grid grid-cols-5 text-gray-500 mb-4">
          <div className="col-span-1 text-left">Product</div>
          <div className="col-span-1 text-left">Date</div>
          <div className="col-span-1 text-left">Ref Number</div>
          <div className="col-span-1 text-left">Price</div>
          <div className="col-span-1 text-right">Status</div>
        </div>
        
        <Separator />
        
        {orders.map((order) => (
          <div key={order.id}>
            <div className="grid grid-cols-5 py-6 items-center">
              <div className="col-span-1">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden">
                    <img 
                      src={order.image} 
                      alt={order.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{order.name}</h3>
                    <div className="text-gray-500">
                      {order.color} <span className="ml-2">{order.size}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">{order.date}</div>
              <div className="col-span-1">{order.refNumber}</div>
              <div className="col-span-1">${order.price}</div>
              <div className="col-span-1 text-right">
                <Button variant="outline" className="rounded-full border-orange-500 text-orange-500 hover:bg-orange-50">
                  Track Order
                </Button>
              </div>
            </div>
            <Separator />
          </div>
        ))}
      </div>
    </>
  );
};
