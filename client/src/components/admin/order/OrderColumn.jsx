"use client";

import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { format } from "date-fns";


import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import AdminOrderDialog from "./AdminOrderDialog";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { getOrderDetails } from "@/store/shop/order";
import { useDispatch, useSelector } from "react-redux";
// document.getElementById("fallbackElement").focus(); // Move focus

// Helper function to format currency

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

// Helper function to get status badge styling
const getStatusBadge = (status) => {
  
  const styles = {
    pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
    processing: "bg-blue-100 text-blue-800 hover:bg-blue-100",
    completed: "bg-green-100 text-green-800 hover:bg-green-100",
    cancelled: "bg-red-100 text-red-800 hover:bg-red-100",
  };

  return (
    <Badge className={`${styles[status]} font-medium`} variant="outline">
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
};
const OrderColumn = [
  
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "Order ID",
    cell: ({ row }) => <div className="font-medium">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() =>
          column.toggleSorting(column.getIsSorted() === "asc")
        }
      >
        Date
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (  
        <div >
                        <p className="text-sm">
                          {format(new Date(row?.original?.createdAt), "dd MMM yyyy")}


                          </p>
          

        </div>
    
    ),
  },
  {
    accessorKey: "users",
    header: "User",
    cell: ({ row }) => (
      
      <div>
        <div className="font-medium">{row.original.users.email}</div>
        <div className="text-sm text-muted-foreground">
          {row.original.users.id}

        </div>
      </div>
    ),
  },
  // {
  //   accessorKey: "email",
  //   header: "Email",
  //   enableHiding: true,
  // },
  // {
  //   accessorKey: "items",
  //   header: "Items",
  //   cell: ({ row }) => (
  //     <div className="text-center">{row.getValue("items")}</div>
  //   ),
  // },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => getStatusBadge(row.getValue("status")),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "total",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() =>
          column.toggleSorting(column.getIsSorted() === "asc")
        }
        className="justify-end w-full"
      >
        Amount
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const total = Number.parseFloat(row.getValue("total"));
      return (
        <div className="text-right font-medium">
          {formatCurrency(total)}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell:({ row }) => {
      const order = row.original;
const [open, setOpen] = useState(false)
 const {isAuthenticated,user}=useSelector((state)=>state.auth)
    const {orderDetails}=useSelector((state)=>state.shopOrder)
  
  
const dispatch=useDispatch()
 const getOrder=async(orderId)=>{
    const userId=row.original.users.id
console.log("order id is",orderId)
const response =await dispatch(getOrderDetails({userId,orderId}))
    }


      return (
       <>
      

<DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(order.id)}
            >
              Copy order ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            
            <DropdownMenuItem 
                        onClick={() => {
              // Delay to prevent aria-hidden focus conflict
             getOrder(row?.original?.id)
              setTimeout(() => setOpen(true), 10)
             
            }}
            
>
              View details
              {/* <AdminOrderDialog/> */}
              </DropdownMenuItem>
            <DropdownMenuItem>Update status</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              Cancel order
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
<AdminOrderDialog
            open={open}
            setOpen={setOpen}
            orderDetails={orderDetails}
            />


       
       </>

        
      );
    },
  },
];



export default OrderColumn