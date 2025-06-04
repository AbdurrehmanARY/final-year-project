import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { getProductDetail } from "@/store/admin/products-slice"
import { getOrderDetails } from "@/store/shop/order"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
// import { Label } from "recharts"


function OrderDetail({trigger,orderDetails}) {
console.log("order",orderDetails)  



  return (
    <>
    <Dialog>
  <DialogTrigger>{trigger}</DialogTrigger>
    <DialogContent className="sm:max-w-[600px]">
      <div className="grid gap-6">
        <div className="grid gap-2">
          <div className="flex mt-6 items-center justify-between">
            <p className="font-medium">Order ID</p>
            <Label>{orderDetails?.id}</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Order Date</p>
            {/* <Label>{orderDetails?.orderDate.split("T")[0]}</Label> */}
            <Label>date</Label>

          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Order Price</p>
            <Label>{orderDetails?.total}</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Payment method</p>
            <Label>{orderDetails?.paymentMethod}</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Payment Status</p>
            <Label>{orderDetails?.paymentStatus}</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Order Status</p>
            <Label>
              <Badge
                // className={`py-1 px-3 ${
                //   orderDetails?.orderStatus === "confirmed"
                //     ? "bg-green-500"
                //     : orderDetails?.orderStatus === "rejected"
                //     ? "bg-red-600"
                //     : "bg-black"
                // }`}
              >
                {orderDetails?.status}
              </Badge>
            </Label>
          </div>
        </div>
        <Separator />
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-medium">Order Details</div>
            <ul className="grid gap-3">
              {orderDetails?.items && orderDetails?.items.length > 0
                ? orderDetails?.items.map((item) => (
                    <li className="flex items-center justify-between">
                      <span>Title: {item?.productName}</span>
                      <span>Quantity: {item?.quantity}</span>
                      <span>Price: ${item?.price}</span>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-medium">Shipping Info</div>
            <div className="grid gap-0.5 text-muted-foreground">
              <span>user name</span>
              <span>{orderDetails?.address?.address}</span>
              <span>{orderDetails?.address?.city}</span>
              <span>{orderDetails?.address?.postelCode}</span>
              <span>{orderDetails?.addressInfo?.phone}</span>
              {/* <span>{orderDetails?.addressInfo?.notes}</span> */}
              
                 <span>address</span>
              <span>cith</span>
              <span>pin code</span>
              <span>phone</span>
              <span>address notes</span>

            </div>
          </div>
        </div>
      </div>
    </DialogContent>
</Dialog>

    
    </>
  )
}

export default OrderDetail
