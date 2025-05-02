
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogFooter,
  DialogHeader,DialogContent
} from "@/components/ui/dialog";
// import { CustomDialogContent } from "@/components/CustomDialogContent";

function PaymentSuccess(props) {
    const { open, onOpenChange } = props;
  
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
            Thanks for your order, the order confirmation has been sent to customer@gmail.com
          </p>
        </DialogHeader>

        <div className="mt-4 flex flex-col items-center">
          <p className="text-sm text-gray-500">Total Payment</p>
          <p className="text-3xl font-bold">$112.99</p>
        </div>

        <div className="border-t border-gray-200 mt-4">
          <div className="grid grid-cols-2 gap-4 py-3">
            <div>
              <p className="text-sm text-gray-500">Ref Number</p>
              <p className="text-sm">0981727198201</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Transaction Date</p>
              <p className="text-sm">Thursday, May 11 2023</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4 py-3">
            <div>
              <p className="text-sm text-gray-500">Payment Method</p>
              <p className="text-sm">PayPal</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Shipping Method</p>
              <p className="text-sm">DHL (3 business days)</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h3 className="font-medium mb-3">Your Order</h3>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-20 w-20 bg-gray-100 rounded">
              <div className="h-full w-full flex items-center justify-center bg-gray-200">
                <span className="text-xs text-gray-500">Coat Image</span>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-medium">Winter Coat</h4>
              <p className="text-gray-500 text-sm">Beiges M</p>
              <div className="flex justify-between mt-1">
                <p className="font-medium">$124.99</p>
                <p className="text-gray-500">x1</p>
              </div>
            </div>
          </div>

          <div className="space-y-2 border-t border-gray-200 pt-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium">$124.99</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="font-medium">-$12</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Cost</span>
              <span className="font-medium">Free</span>
            </div>
            <div className="flex justify-between border-t border-gray-200 pt-2">
              <span>Total</span>
              <span className="font-bold">$112.99</span>
            </div>
          </div>
        </div>

        <DialogFooter className="sm:justify-between gap-3 mt-4">
          <Button 
            variant="outline" 
            className="flex-1 rounded-md"
            onClick={() => onOpenChange(false)}
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




export function PaymentSuccessModalDemo() {
  const [open, setOpen] = useState(false);
  
  const demoOrderDetails = {
    id: '1',
    email: 'customer@gmail.com',
    total: 112.99,
    subtotal: 124.99,
    discount: 12.00,
    shippingCost: 0,
    referenceNumber: '0981727198201',
    transactionDate: 'Thursday, May 11 2023',
    paymentMethod: 'PayPal',
    shippingMethod: 'DHL',
    shippingDays: '3 business days',
    items: [
      {
        id: '1',
        name: 'Winter Coat',
        variant: 'Beiges',
        size: 'M',
        price: 124.99,
        quantity: 1,
        image: 'https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
  };
  
  return (
    <div className="flex flex-col items-center gap-4">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Show Payment Success</Button>
        </DialogTrigger>
        <PaymentSuccess 
          orderDetails={demoOrderDetails} 
          open={open}
          onOpenChange={setOpen}
        />
      </Dialog>
    </div>
  );
}
