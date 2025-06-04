import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { getAllOrdersByAdmin, updateOrderStatus } from "@/store/admin/order"
import { toast } from "sonner"
import { getOrderDetails } from "@/store/shop/order"
import { useEffect } from "react"



function AdminOrderDialog({open,setOpen,orderDetails}) {
    const dispatch=useDispatch()
    const {isAuthenticated,user}=useSelector((state)=>state.auth)
    const { handleSubmit, control,reset } = useForm({
    defaultValues: {
      status:orderDetails?.status || '',
    },
  })
const orderStatus=[
    {value:"PENDING",label:"PENDING"},
    {value:"SHIPPED",label:"SHIPPED"},
    {value:"DELIVERED",label:"DELIVERED"},
    {value:"CANCELLED",label:"CANCELLED"},

]
console.log(orderDetails)
useEffect(() => {
  if (orderDetails?.status) {
    reset({ status: orderDetails.status })
  }
}, [orderDetails, reset])



  const onSubmit = async(data) => {
    console.log("Form Data:", data)
   const orderId=orderDetails?.id
   const userId=user?.id
    const {status}=data
    const response=await dispatch(updateOrderStatus({userId,orderId,status}))
    if(response?.payload?.success){
            await dispatch(getAllOrdersByAdmin({userId}))
            await dispatch(getOrderDetails({userId,orderId}))
            reset()
        toast(response?.payload?.message)
        setOpen(false)
    }
  }


    return (
    <div>
        <Dialog open={open} onOpenChange={setOpen}>

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
            <Label>${orderDetails?.total}</Label>
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
                className={`py-1 px-3 ${
                  orderDetails?.status === "confirmed"
                    ? "bg-green-500"
                    : orderDetails?.status === "rejected"
                    ? "bg-red-600"
                    : "bg-black"
                }`}
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
                ?orderDetails?.items.map((item) => (
                    <li className="flex items-center justify-between">
                      <span>Title: {item.productName}</span>
                      <span>Quantity: {item.quantity}</span>
                      <span>Price: ${item.price}</span>
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
              <span>name</span>
              <span>{orderDetails?.address?.address}</span>
              <span>{orderDetails?.address?.city}</span>
              <span>{orderDetails?.address?.postelCode}</span>
              <span>{orderDetails?.address?.phone}</span>
              {/* <span>{orderDetails?.address?.notes}</span> */}
            </div>
          </div>
        </div>

        {/* <div>
          <CommonForm
            formControls={[
              {
                label: "Order Status",
                name: "status",
                componentType: "select",
                options: [
                  { id: "pending", label: "Pending" },
                  { id: "inProcess", label: "In Process" },
                  { id: "inShipping", label: "In Shipping" },
                  { id: "delivered", label: "Delivered" },
                  { id: "rejected", label: "Rejected" },
                ],
              },
            ]}
            formData={formData}
            setFormData={setFormData}
            buttonText={"Update Order Status"}
            onSubmit={handleUpdateStatus}
          />
        </div> */}
<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Controller
        name="status"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Select
            onValueChange={field.onChange}
            value={field.value}
            defaultValue={field.value}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              {orderStatus.map((value,index)=>(
              <SelectItem key={index} value={value.value}>{value.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />

      <Button type="submit">Submit</Button>
    </form>

      </div>
    </DialogContent>




</Dialog>      
    </div>
  )
}

export default AdminOrderDialog
