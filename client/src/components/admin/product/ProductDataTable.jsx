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
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import PaginationComp from "./PaginationComp";
import { Button } from "@/components/ui/button";
import AddProductDialog from "./AddProductDialog";
import { useDispatch } from "react-redux";
import { deleteProduct, getAllProducts } from "@/store/admin/products-slice";
import { toast } from "sonner";

function ProductDataTable({ columns, data }) {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [rowSelection, setRowSelection] = useState({});
  const [expanded, setExpanded] = useState({});
  const dispatch=useDispatch()
 const [isEdited,setIsEdited]=useState(true)
// setIsEdited(true)

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
    console.log(response?.payload.message)
    dispatch(getAllProducts())
      return toast(response?.payload.message)
    }


  return (
    <>
      <div className="rounded-md border">
        <div>
          <div className="flex items-center py-4">
            <Input
              placeholder="Filter product..."
              value={table.getColumn("productName")?.getFilterValue() ?? ""}
              onChange={(event) =>
                table.getColumn("productName")?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
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
                      {row.getIsExpanded() && (
                        <TableRow className="bg-gray-50">


                          <TableCell colSpan={row.getVisibleCells().length} className="p-4 ">
                            <div className="flex flex-col">


                              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                                {row.original.image.map((value, index) => (
                                  <div key={index} className="bg-[#F3F4F6] rounded-lg p-2 shadow-sm">
                                    <img
                                      src={value}
                                      alt={`Product image ${index + 1}`}
                                      className="w-full h-32 object-contain"
                                    />
                                  </div>
                                ))}
                              </div>

                              <div className="mb-4">
                                <h3 className="text-sm font-semibold text-left mb-2">Details</h3>
                                <p className="text-sm text-gray-600 text-left">
                                  {row.original.description}

                                </p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div className="bg-gray-50 p-4 rounded">
                                  <h4 className="text-sm font-semibold text-left mb-2">Product State</h4>
                                  <div className="flex items-center">
                                    <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                                      <span className="w-2 h-2 me-1 bg-blue-500 rounded-full"></span>
                                      {row.original.stockStatus}

                                    </span>
                                  </div>
                                </div>

                                <div className="bg-[#F3F4F6] p-4 rounded-lg">
                                  <h4 className="text-sm font-semibold text-left mb-2">Shipping</h4>
                                  <div className="flex text-sm">
                                    <span className="inline-flex items-center text-gray-500">
                                      <span className="w-2 h-2 me-1 bg-gray-500 rounded-full"></span>
                                      {/* {product.details.shipping} */}

                                    </span>
                                  </div>
                                </div>

                                <div className="bg-gray-50 p-4 rounded">
                                  <h4 className="text-sm font-semibold text-left mb-2">Colors</h4>
                                  <div className="flex space-x-1">
                                    {row.original.colors.map((color, index) => (
                                      <ColorCircle key={index} color={color} />
                                    ))}
                                  </div>
                                </div>

                                <div className="bg-gray-50 p-4 rounded">
                                  <h4 className="text-sm font-semibold text-left mb-2">Brand</h4>
                                  <p className="text-sm text-gray-600 text-left">{row.original.brand}</p>
                                </div>

                                <div className="bg-gray-50 p-4 rounded">
                                  <h4 className="text-sm font-semibold text-left mb-2">Sold by</h4>
                                  <p className="text-sm text-gray-600 text-left">sold</p>
                                </div>

                                <div className="bg-gray-50 p-4 rounded">
                                  <h4 className="text-sm font-semibold text-left mb-2">Ships from</h4>
                                  <p className="text-sm text-gray-600 text-left">info</p>
                                </div>

                                <div className="bg-gray-50 p-4 rounded">
                                  <h4 className="text-sm font-semibold text-left mb-2">Dimensions (cm)</h4>
                                  <p className="text-sm text-gray-600 text-left">dimensions</p>
                                </div>

                                <div className="bg-gray-50 p-4 rounded">
                                  <h4 className="text-sm font-semibold text-left mb-2">Item weight</h4>
                                  <p className="text-sm text-gray-600 text-left">weight</p>
                                </div>
                              </div>

                              <div className="flex space-x-2 mt-6 justify-start">

                             

                                <AddProductDialog
                                  defaultData={row.original}
                                  setIsEdited={setIsEdited}
                                  isEdited={isEdited}
                                  trigger={
                                    <Button  variant="default" className="bg-blue-600 hover:bg-blue-700">
                                    Edit
                                  </Button>

                                  }
                                />

                                <Button variant="outline" className="text-gray-800">
                                  Preview
                                </Button>
                                <Button variant="destructive" onClick={()=>handleDelete(row.original.id)} >
                                  Delete
                                </Button>
                              </div>
                            </div>

                          </TableCell>

                        </TableRow>

                      )}
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