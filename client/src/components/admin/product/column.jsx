
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowUpDown, ChevronDown, ChevronRight, Ellipsis, Eye, Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox";
import TableHeader from "./TableHeader";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";
import AddProductDialog from "./AddProductDialog";

const check=(id)=>{
  console.log(id)
}

const columns = [
  // {
  //   id: "expander",
  //   header: () => null,
  //   cell: ({ row }) => (
  //     <button
  //     onClick={() => row.toggleExpanded()}

  //    className="flex items-center">
  //       {row.getIsExpanded() ? <ChevronDown size={16} />  : <ChevronRight size={16} />}
  //     </button>
  //   ),
  // },

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
    accessorKey: "productName",
    header: ({ column }) => (
        <TableHeader column={column} title="Product" />
      ),
  
    cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <img
            src={row.original.image[0]} // Assuming `image` is an array and you want the first image
            alt={row.original.productName}
            className="w-10 h-10 object-cover rounded-md"
          />
          <span>{row.original.productName}</span>
        </div>
      ),
  },
  {
    accessorKey: "category",
    // header: ({ column }) => {
    //     return (
    //       <Button
    //         variant="ghost"
    //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //       >
    //         Category
    //         <ArrowUpDown className="ml-2 h-4 w-4" />
    //       </Button>
    //     )
    //   },
    header: ({ column }) => (
        <TableHeader column={column} title="Category" />
      ),
        cell: ({ row }) => (
        <Badge
        variant="secondry"
        >
{row.original.category}
</Badge>
      
      ),

  },
  {
    accessorKey: "brand",
    // header: ({ column }) => {
    //     return (
    //       <Button
    //         variant="ghost"
    //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //       >
    //         Brand
    //         <ArrowUpDown className="ml-2 h-4 w-4" />
    //       </Button>
    //     )
    //   },

    header: ({ column }) => (
        <TableHeader column={column} title="Brand" />
      ),
  },
  {
    accessorKey: "price",
    
    header: ({ column }) => (
        <TableHeader column={column} title="Price" />
      ),


    // header: ({ column }) => {
    //     return (
    //       <Button
    //         variant="ghost"
    //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //       >
    //     Price
    //         <ArrowUpDown className="ml-2 h-4 w-4" />
    //       </Button>
    //     )
    //   },
  },
  {
    accessorKey: "stock",
    // header: ({ column }) => {
    //     return (
    //       <Button
    //         variant="ghost"
    //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //       >
    //         Stock
    //         <ArrowUpDown className="ml-2 h-4 w-4" />
    //       </Button>
    //     )
    //   },

    header: ({ column }) => (
        <TableHeader column={column} title="Stock" />
      ),
  },
  {
    accessorKey: "stockStatus",
    header: "Status",
    cell: ({ row }) => (
        <Badge 
variant={
  row.original.stockStatus === "In Stock"
    ? "default"
    : row.original.stockStatus === "Low Stock"
      ? "outline"
      : "destructive"
}
>
{row.original.stockStatus}
</Badge>
      
      ),
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({row}) => 
      {
const [isEdited,setIsEdited]=useState(true)
const [open, setOpen] = useState(false)


        return(
          <>
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="h-8 w-8 p-0">
        <span className="sr-only">Open menu</span>
        {/* <MoreHorizontal className="h-4 w-4" /> */}
        <Ellipsis/>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
      <DropdownMenuItem
      key={1}
        // onClick={() => check(row.original.id)}
      >
        <Eye />
        View Product
      </DropdownMenuItem>
         <DropdownMenuItem key={2}  onClick={() => {
              // Delay to prevent aria-hidden focus conflict
            //  getOrder(row?.original?.id)
            setIsEdited(true)
              setTimeout(() => setOpen(true), 10)
             
            }} >
            <div className='flex gap-2'>
              <Pencil />
              <span>Edit product</span>
              </div>
      
            </DropdownMenuItem>
      <DropdownMenuSeparator />
    
      <DeleteProduct id={row.original.id}/>

      {/* <DropdownMenuItem>View payment details</DropdownMenuItem> */}
    </DropdownMenuContent>
  </DropdownMenu>


                                 <AddProductDialog
                                 open={open}
                                 setOpen={setOpen}
                                  defaultData={row.original}
                                  setIsEdited={setIsEdited}
                                  isEdited={isEdited}
                                  trigger={
                                    <div></div>
                                  }
                                />
    </>
        )

      },
  },
];

export { columns };
