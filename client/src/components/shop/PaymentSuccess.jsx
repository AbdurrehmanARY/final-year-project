
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogFooter,
  DialogHeader,DialogContent
} from "@/components/ui/dialog";
// import { CustomDialogContent } from "@/components/CustomDialogContent";
// import { format } from 'date-fns';
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

function PaymentSuccess(props) {
  const navigate = useNavigate();
    const { open, onOpenChange ,order,user} = props;
    console.log('order is',order)
    if(!order) {
      return null; // or some loading state
    }

 // "15 May 2025"
   const subtotal = order?.items?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 15.0 : 0;
  const total = subtotal + shipping;
  console.log("total",total)
  console.log("subtotal",subtotal)
  console.log("shipping",shipping)

    
  
    return (
   <>
   <Dialog open={open} onOpenChange={onOpenChange} >
      <DialogContent className="sm:max-w-md mx-auto overflow-y-auto max-h-[80vh]" >
       
        <DialogHeader className="flex flex-col items-center space-y-3 pt-6 ">
          <div className="rounded-full border-2 border-gray-600 p-3">
            <Check className="h-8 w-8 text-gray-700" strokeWidth={2} />
          </div>
          <h2 className="text-2xl font-semibold text-center">Payment Success!</h2>
          <p className="text-center text-gray-600 text-sm">
            Thanks for your order, the order confirmation has been sent to {user?.email}
          </p>
        </DialogHeader>

        <div className="mt-4 flex flex-col items-center">
          <p className="text-sm text-gray-500">Total Payment</p>
          <p className="text-3xl font-bold">Rs. {order?.total}</p>
        </div>

        <div className="border-t border-gray-200 mt-4">
          <div className="grid grid-cols-2 gap-4 py-3">
            <div>
              <p className="text-sm text-gray-500">Ref Number</p>
              <p className="text-sm">{order?.id}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Transaction Date</p>
              <p className="text-sm">{format(new Date(order?.createdAt), "dd MMM yyyy")}</p>
              {/* <p className="text-sm">date</p> */}

            </div>
          </div>
        </div>

        <div className="border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4 py-3">
            <div>
              <p className="text-sm text-gray-500">Payment Method</p>
              <p className="text-sm">{order?.paymentMethod}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Shipping Method</p>
              <p className="text-sm">DHL (3 business days)</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h3 className="font-medium mb-3">Your Order</h3>
          {order?.items?.map((item) => (
            <div className="flex items-center gap-3 mb-4">
            <div className="h-20 w-20 bg-gray-100 rounded">
              <div className="h-full w-full flex items-center justify-center bg-gray-200">
                {/* <span className="text-xs text-gray-500">Coat Image</span> */}
                <img src={item?.image} alt={item?.productName} />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-medium">{item?.productName}</h4>
              <p className="text-gray-500 text-sm">{item?.category}</p>
              <div className="flex justify-between mt-1">
                <p className="font-medium">Rs.{item.price}</p>
                <p className="text-gray-500">x{item.quantity}</p>
              </div>
            </div>
          </div>
          ))}

          <div className="space-y-2 border-t border-gray-200 pt-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium">Rs.{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="font-medium">-$12</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Cost</span>
              <span className="font-medium">{shipping}</span>
            </div>
            <div className="flex justify-between border-t border-gray-200 pt-2">
              <span>Total</span>
              <span className="font-bold">Rs. {total}</span>
            </div>
          </div>
        </div>

        <DialogFooter className="sm:justify-between gap-3 mt-4">
          <Button 
            variant="outline" 
            className="flex-1 rounded-md"
            onClick={() => (onOpenChange(false), navigate("/"))}
          >
            Continue Shopping
          </Button>
          <Button 
            className="flex-1 bg-[#E97146] hover:bg-[#D86135] rounded-md"
          >
            Download Received
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
   </>
  )
}

export default PaymentSuccess


