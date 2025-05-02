import React, { useEffect, useState } from 'react';
import { brand, category, specs, stockStatus } from "@/config";

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addNewProduct, getAllProducts } from '@/store/admin/products-slice';
import axios from 'axios';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Plus, Upload, X } from 'lucide-react';
import { toast } from 'sonner';




function AddProductDialog({trigger,defaultData,setIsEdited,isEdited} ) {
  console.log( "is edited",isEdited)

  const { register, handleSubmit, reset, setValue, watch } = useForm(
  {
    defaultValues : {
      productName: defaultData?.productName || '',
      sku: defaultData?.sku || '',
      description:defaultData?.sku || '',
      category: defaultData?.category || '',
      brand:defaultData?.brand || '',
      price: defaultData?.price || '',
      salePrice: defaultData?.salePrice || '',
      stock: defaultData?.stock || '',
      stockStatus: defaultData?.stockStatus || '',
      // display 
      displaySize: defaultData?.displaySize || '',
      displaytype: defaultData?.displaytype || '',
      refreshRate: defaultData?.refreshRate || '',
      resolution: defaultData?.resolution || '',
    
      // // storage 
      storage: defaultData?.storage || '',
    
      // // camera 
      backCamera: defaultData?.backCamera || '',
      frontCamera: defaultData?.frontCamera || '',
      // // network 
      sim: defaultData?.sim || '',
      network: defaultData?.network || '',
    
      // // charging and Battery
      charging: defaultData?.charging || '',
      battery: defaultData?.battery || '',
      usbPort: defaultData?.usbPort || '',
      // // processer 
      processor: defaultData?.processor || '',
      untututu: defaultData?.untututu || '',
    
      // // os
      os: defaultData?.os || '',
      image: [],
      colors: []
    
    }

  }
  );
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState(defaultData?.image || [])
  const [colors, setColors] = useState(defaultData?.colors || [])
  const [newColor, setNewColor] = useState("");
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({})
  // setOpen(false)

  const handleImageUpload = async (e) => {

    const files = Array.from(e.target.files || []);
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("productImage", file
      ); // Append each file to the FormData object
    });


    try {
      setUploading(true)
      const response = await axios.post(`http://localhost:3000/api/v1/admin/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the correct content type
        },
      })
      const imageLink = response.data.result
      setImage((prev) => [...prev, imageLink]); // Add the new link to the image state
      console.log(image)
    }
    catch (e) {
      console.log(e)

    }
    finally {
      setUploading(false)

    }
  };

  const removeImage = (index) => {
    setImage((prev) => prev.filter((_, i) => i !== index)); // Remove the image at the specified index
  };

  const addColor = () => {
    if (newColor.trim()) {

      setColors((pre) => [...pre, newColor.trim()])

      setNewColor("");
    }
  };

  const removeColor = (color) => {
    setColors(
      colors.filter((c) => c !== color)

    )

  };


  // Submit function 
  const onSubmit = async (data) => {
    const data2Send = {
      ...data,
      stock: parseInt(data.stock),
      price: parseInt(data.price),
      salePrice: parseInt(data.salePrice),
      image, colors
    }
    const response = await dispatch(addNewProduct(data2Send))
    if (response?.payload.success) {
    dispatch(getAllProducts())
      toast(response.payload.message)
    }
    else {
      toast('error occur')

    }

    setImage([])
    setColors([])
    setOpen(false)
    reset();
  };
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen} >
      
        <DialogTrigger asChild >
          <div  onClick={(e) => e.stopPropagation()}>
          {trigger}
          </div>
        </DialogTrigger>

        {/* <Button>Add Product</Button> */}
        <DialogContent className="min-w-full  h-[calc(100vh-40px)] p-0 gap-0   ">
          <DialogHeader className="flex-shrink-0 px-6 py-4 border-b">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-2xl">{isEdited ?"Edit Your Product" :"Add New Product"}</DialogTitle>
                <DialogDescription>Fill in the details to {isEdited ?"edit product" :"add a new product"}   to your inventory.</DialogDescription>
              
              
              
              
              </div>
              {/* <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)} className="h-8 w-8 rounded-full">
              <X className="h-4 w-4" />
            </Button> */}
            </div>
          </DialogHeader>

          <div className="flex-grow overflow-y-auto p-6">
            <Tabs defaultValue="general " className="" >
              <TabsList className="grid grid-cols-5 mb-6">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="images">Images</TabsTrigger>
                <TabsTrigger value="inventory">Inventory</TabsTrigger>
                <TabsTrigger value="specification">Specification</TabsTrigger>
                <TabsTrigger value="attributes">Attributes</TabsTrigger>
              </TabsList>

              <form id="product-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                {/* General Tab */}
                <TabsContent value="general" className="space-y-6 ">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-1">Product Name</label>
                      <input
                        {...register("productName")}
                        required
                        type="text"
                        placeholder="Oppo A54"
                        className="w-full border rounded-md p-2"
                      />
                    </div>
                    <div>
                      <label className="block mb-1">SKU</label>
                      <input
                        {...register("sku")}
                        required
                        type="text"
                        placeholder="PROD-12345"
                        className="w-full border rounded-md p-2"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-1">Description</label>
                    <textarea
                      {...register("description")}
                      placeholder="Detailed description"
                      className="w-full border rounded-md p-2 min-h-32 resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-1">Category</label>
                      <select
                        {...register("category")}
                        required
                        className="w-full border rounded-md p-2"
                        defaultValue=''

                      >
                        <option value="" disabled>Select a category</option>

                        {category.map((item, index) => (

                          <option key={index} value={item.label}>{item.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block mb-1">Brand</label>
                      <select
                        {...register("brand")}
                        required
                        className="w-full border rounded-md p-2"
                        defaultValue=''

                      >
                        <option value="" disabled>Select  brand</option>

                        {brand.map((item, index) => (
                          <option key={index} value={item.label}>{item.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </TabsContent>
                {/* Images Tab */}
                <TabsContent value="images" className="space-y-6  ">
                  <div className="space-y-4 ">
                    <h3 className="text-lg font-medium">Product Images</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {image.map((image, index) => (
                        <div key={index} className="relative group border-1 border-black border-dotted ">
                          <img src={image} alt={`Image ${index + 1}`} className="object-contain w-full h-60 rounded-md" />
                          <Button type="button" variant="destructive" size="icon" onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 h-6 w-6 rounded-full">
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                      <label htmlFor="productImage" className={`aspect-square  h-full border-dashed border flex flex-col items-center justify-center text-sm text-muted-foreground ${uploading ? "cursor-not-allowed" : "cursor-pointer"}  rounded-md hover:bg-muted/50`}>

                        <Upload className="h-6 w-6 " />
                        Upload
                        <input
                          // {...register("productImage")}
                          id="productImage"
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          disabled={uploading}


                        />
                      </label>
                    </div>
                  </div>
                </TabsContent>

                {/* Inventory Tab */}
                <TabsContent value="inventory" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-1">Sale Price ($)</label>
                      <Input {...register("salePrice")} required placeholder="e.g 1000 Rs" type="number" step="0.01" className="w-full border rounded-md p-2" />
                    </div>
                    <div>
                      <Label className="block mb-1">Price ($)</Label>
                      <Input {...register("price")} required placeholder="e.g 1000 Rs" type="number" step="0.01" className="w-full border rounded-md p-2" />
                    </div>
                    <div>
                      <Label className="block mb-1">Stock</Label>
                      <Input {...register("stock")} required placeholder="e.g 30" type="number" className="w-full border rounded-md p-2" />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-1">Status</label>
                    <select {...register("stockStatus")} required className="w-full border rounded-md p-2">
                      <option value="">Select status</option>
                      {stockStatus.map((item, index) => (
                        <option id={index} value={item.label}>{item.label}</option>
                      ))}
                    </select>
                  </div>
                </TabsContent>

                {/* Specifivation Tab */}
                <TabsContent value="specification" className="space-y-6 h-[400px] ">

                  {specs.map((value, index) => (
                    <div key={index}>
                      <h1 className="text-xl"> {value.heading}</h1>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
                        {value.spec.map((value, index) => (
                          <div key={index}>
                            <label className="block mb-1">{value.label}</label>


                            {value.option.length === 0
                              ?
                              <input {...register(value.id)} placeholder={value.placeholder} className="w-full border rounded-md p-2" />
                              :
                              <select
                                {...register(value.id)}
                                placeholder='add product'
                                className="w-full border rounded-md p-2"
                                defaultValue=''
                              >
                                <option value="" disabled>
                                  Select {value.label}
                                </option>

                                {value.option.map((item, index) => (<option value={item.label}>{item.label}</option>

                                ))}
                              </select>
                            }
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </TabsContent>

                {/* Attributes Tab */}
                <TabsContent value="attributes" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Colors</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {colors.length > 0 ? colors.map((color) => (
                        <Badge key={color} variant="secondary" className="gap-1">
                          {color}
                          <Button type="button" size="icon" variant="ghost" onClick={() => removeColor(color)}
                            className="h-4 w-4 ml-1">
                            <X className="h-3 w-3" />
                          </Button>
                        </Badge>
                      )) : <p className="text-sm text-muted-foreground">No colors added yet.</p>}
                    </div>

                    <div className="flex gap-2">
                      <Input
                        value={newColor}
                        onChange={(e) => setNewColor(e.target.value)}
                        placeholder="Add a color"
                        className="w-full max-w-xs border rounded-md p-2"
                      />
                      <Button type="button" size="sm" onClick={addColor} disabled={!newColor}>
                        <Plus className="h-4 w-4 mr-1" /> Add
                      </Button>
                    </div>
                  </div>
                </TabsContent>

              </form>
            </Tabs>
          </div>
          {/* </ScrollArea> */}

          <DialogFooter className=" flex-shrink-0 px-6 py-4 border-t">
            <Button variant="outline" onClick={()=>setOpen(false)} >
              Cancel
            </Button>
            <Button type="submit" form="product-form">
              
              {isEdited ?"Edit Product" :"Add Product"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </>
  )
}

export default AddProductDialog