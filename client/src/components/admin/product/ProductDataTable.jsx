import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getExpandedRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import PaginationComp from "./PaginationComp";
import { Button } from "@/components/ui/button";
import AddProductDialog from "./AddProductDialog";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getAllProducts } from "@/store/admin/products-slice";
import { toast } from "sonner";
import { Plus } from "lucide-react";

function ProductDataTable({ columns, data }) {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [rowSelection, setRowSelection] = useState({});
  const [expanded, setExpanded] = useState({});
  const dispatch=useDispatch()
//  const [isEdited,setIsEdited]=useState(true)
// setIsEdited(true)
// const dispatch=useDispatch()
  const products=useSelector((state)=>state.adminProducts)
 const {isLoading,listOfProduct}=products
  const [open, setOpen] = useState(false)

 const [isEdited,setIsEdited]=useState(false)
 useEffect(()=>{
  
      dispatch(getAllProducts())
     
 },[dispatch])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    // getExpandedRowModel: getExpandedRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,
    getExpandedRowModel: getExpandedRowModel(), // Ensure this is included

    onExpandedChange: setExpanded,
    state: {
      sorting,
      columnFilters,
      rowSelection,
      expanded,
    },
  });
  const handleDelete=async(id)=>{
    const response=await dispatch(deleteProduct(id))
    dispatch(getAllProducts())
      return toast(response?.payload.message)
    }


  return (
    <>
      <div className="rounded-md border">
        <div>
          <div className="flex items-center justify-between p-4">
            <Input
              placeholder="Filter product..."
              value={table.getColumn("productName")?.getFilterValue() ?? ""}
              onChange={(event) =>
                table.getColumn("productName")?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
            <AddProductDialog
      default={{}}
      open={open}
     setOpen={setOpen}
      setIsEdited={setIsEdited}
      isEdited={isEdited}
      trigger={
        <Button>
        <Plus/>  Add Product
        </Button>
      }
      />
          </div>

          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows.length ? (
                  table.getRowModel().rows.map((row) => (
                    <React.Fragment key={row.id}>
                      <TableRow onClick={() => row.toggleExpanded()} data-state={row.getIsSelected() && "selected"}>
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                      
                    </React.Fragment>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <PaginationComp table={table} />
          </div>
        </div>
      </div>
    </>
  );
}

const ColorCircle = ({ color }) => (
  <div
    className="w-6 h-6 rounded-full"
    style={{ backgroundColor: color }}
  />
);

export default ProductDataTable;