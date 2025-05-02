import React from 'react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

function OrderSummry({ orderDetails, className }) {
  return (
    <>
     <div className={cn('w-full px-6 pb-6', className)}>
      <h3 className="font-semibold text-lg py-4">Your Order</h3>
      
      <div className="space-y-4">
        {orderDetails.items.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-md flex-shrink-0">
              <img 
                src={item.image} 
                alt={item.name} 
                className="h-full w-full object-cover" 
              />
            </div>
            
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {item.variant} · {item.size}
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="font-medium">${item.price.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">× {item.quantity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Separator className="my-6" />
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <p className="text-muted-foreground">Subtotal</p>
          <p className="font-medium">${orderDetails.subtotal.toFixed(2)}</p>
        </div>
        
        <div className="flex justify-between">
          <p className="text-muted-foreground">Discount</p>
          <p className="font-medium">-${orderDetails.discount.toFixed(2)}</p>
        </div>
        
        <div className="flex justify-between">
          <p className="text-muted-foreground">Shipping Cost</p>
          <p className="font-medium">
            {orderDetails.shippingCost > 0 
              ? `$${orderDetails.shippingCost.toFixed(2)}` 
              : 'Free'}
          </p>
        </div>
        
        <Separator className="my-2" />
        
        <div className="flex justify-between font-semibold">
          <p>Total</p>
          <p>${orderDetails.total.toFixed(2)}</p>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default OrderSummry