import React, { useEffect, useState } from 'react';
import { brand, category, specs, stockStatus } from "@/config";

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addNewProduct, editProduct, getAllProducts } from '@/store/admin/products-slice';
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





function AddProductDialog({trigger,open,setOpen,defaultData,setIsEdited,isEdited} ) {
  
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
      displaySize: defaultData?.specs?.displaySize?.value || '',
      displaytype: defaultData?.specs?.displaytype?.value || '',
      refreshRate: defaultData?.specs?.refreshRate?.value || '',
      resolution: defaultData?.specs?.resolution?.value || '',
    
      // // storage 
      storage: defaultData?.specs?.storage?.value || '',
    
      // // camera 
      backCamera: defaultData?.specs?.backCamera?.value || '',
      frontCamera: defaultData?.specs?.frontCamera?.value || '',
      // // network 
      sim: defaultData?.specs?.sim?.value || '',
      network: defaultData?.specs?.network?.value || '',
    
      // // charging and Battery
      charging: defaultData?.specs?.charging?.value || '',
      battery: defaultData?.specs?.battery?.value || '',
      usbPort: defaultData?.specs?.usbPort?.value || '',
      // // processer 
      processor: defaultData?.specs?.processor?.value || '',
      untututu: defaultData?.specs?.untututu?.value || '',
    
      // // os
      os: defaultData?.specs?.os?.value || '',
      image: [],
      colors: []
    
    }

  }
  );

  const [customSpecs, setCustomSpecs] = useState([{ key: "", value: "" }]);
  const dispatch = useDispatch()
  // const [open, setOpen] = useState(false)
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
      const response = await axios.post(`http://localhost:5000/api/v1/admin/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the correct content type
        },
      })
      const imageLink = response.data.result
      setImage((prev) => [...prev, imageLink]); // Add the new link to the image state
      
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
// Watch all fields
  const watchedValues = watch("category");

  // Log watched values on change
  useEffect(() => {
    console.log("Form values changed:", watchedValues);
  }, [watchedValues]);

  // Submit function 
      

  const onSubmit = async (data) => {

      let specsObj = {};

  if (watchedValues === "Mobile Phones") {
    // Build specsObj from static specs config
    specs.forEach(section => {
      section.spec.forEach(field => {
        specsObj[field.id] = {
          label: field.label,
          value: data[field.id]
        };
      });
    });
  }
  // else {
  //   // Build specsObj from customSpecs (key-value pairs) in {label, value} format
  //   customSpecs.forEach(spec => {
  //     if (spec.key && spec.value) {
  //       specsObj[spec.key] = {
  //         label: spec.key,
  //         value: spec.value
  //       };
  //     }
  //   });
  // }

  const customSpecsArr = customSpecs
    .filter(spec => spec.key && spec.value)
    .map(spec => ({
      label: spec.key,
      value: spec.value
    }));

  // Remove static spec fields from data
  const dataCopy = { ...data };
  specs.forEach(section => {
    section.spec.forEach(field => {
      delete dataCopy[field.id];
    });
  });

  const data2Send = {
    ...dataCopy,
    specs: watchedValues === "Mobile Phones" ? specsObj : customSpecsArr,
    stock: parseInt(data.stock),
    price: parseInt(data.price),
    salePrice: parseInt(data.salePrice),
    image,
    colors
  };

      console.log('data 2 send is',data2Send)
     

    if(isEdited){
      const id=defaultData.id
      console.log('data 2 send is',data2Send)
    const response = await dispatch(editProduct({id,formData:data2Send})).then((data) =>{
        console.log('response is',data.payload)
        if (data?.payload?.success) {
    dispatch(getAllProducts())
      toast(data.payload.message)
    }
       })
    
    }
    else {
       dispatch(addNewProduct(data2Send)).then((data) =>{
        if (data?.payload?.success) {
    dispatch(getAllProducts())
      toast(data.payload.message)
    }
       })

    
    }
    setImage([])
    setColors([])
    setIsEdited(false)
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

{watchedValues==="Mobile Phones" ?
specs.map((value, index) => (
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
                              <>
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
                              <input type="text" />
                              
                              </>
                              
                            }
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
:

 <div>
    {customSpecs.map((spec, idx) => (
      <div key={idx} className="flex gap-2 mb-2">
        <input
          type="text"
          className="w-full border rounded-md p-2"
          placeholder="Title"
          value={spec.key}
          onChange={e => {
            const updated = [...customSpecs];
            updated[idx].key = e.target.value;
            setCustomSpecs(updated);
          }}
        />
        <input
          type="text"
          className="w-full border rounded-md p-2"
          placeholder="Value"
          value={spec.value}
          onChange={e => {
            const updated = [...customSpecs];
            updated[idx].value = e.target.value;
            setCustomSpecs(updated);
          }}
        />
        <button
          type="button"
          className="p-2 bg-gray-200 rounded"
          onClick={() => setCustomSpecs([...customSpecs, { key: "", value: "" }])}
        >
          <Plus className="h-4 w-4" />
        </button>
        {customSpecs.length > 1 && (
          <button
            type="button"
            className="p-2 bg-red-200 rounded"
            onClick={() => setCustomSpecs(customSpecs.filter((_, i) => i !== idx))}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      ))}
  </div>

}











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