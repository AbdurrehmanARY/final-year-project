import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";


// import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { OrderList } from "./OrderList";

export const AddressSection = ({ addresses, selectedAddress, setSelectedAddress }) => {
  
    // Mock data for orders
const orders = [
  {
    id: 1,
    name: "Winter Coat",
    color: "Beiges",
    size: "M",
    date: "Thursday, May 11 2023",
    refNumber: "0981727198201",
    price: 124.99,
    image: "/lovable-uploads/44e1025b-fe52-4646-aafb-9e68d60c2921.png"
  },
  {
    id: 2,
    name: "Autumn Dress",
    color: "Beiges",
    size: "M",
    date: "Thursday, May 11 2023",
    refNumber: "0981727198201",
    price: 124.99,
    image: "/lovable-uploads/e6d65847-6951-4f97-abda-379090c971c2.png"
  },
  {
    id: 3,
    name: "Casual T-Shirt",
    color: "Beiges",
    size: "M",
    date: "Thursday, May 11 2023",
    refNumber: "0981727198201",
    price: 124.99,
    image: "/lovable-uploads/03b8416e-6c88-4526-9b03-1ec5e8d02296.png"
  }
];
  return (
    <>
    

<Tabs defaultValue="orders" className="w-full">
      <TabsList className=" w-full  ">
        <TabsTrigger className="px-4 py-4 data-[state=active]:bg-[#E16F3D] text-gray-700" value="orders">Orders</TabsTrigger>
        <TabsTrigger className="px-4 py-4 data-[state=active]:bg-[#E16F3D] text-gray-700" value="address">Address</TabsTrigger>
      </TabsList>
      <TabsContent value="orders">
         <div className="container mx-auto px-4 py-8 max-w-6xl">
              <h2 className="text-3xl font-medium mb-2">Order Tracking</h2>
    
              <OrderList orders={orders} />
            </div>
      </TabsContent>
      <TabsContent value="address">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h2 className="text-3xl font-medium mb-2">Address</h2>
      <div className="text-gray-600 mb-6">Shipping Address</div>

      <RadioGroup value={selectedAddress} onValueChange={setSelectedAddress} className="space-y-4">
        {addresses.map((address) => {
          const AddressIcon = address.icon;
          return (
            <div
              key={address.id}
              className={`border rounded-xl p-6 ${
                selectedAddress === address.id.toString()
                  ? 'border-orange-500'
                  : 'border-gray-200'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <AddressIcon className="w-5 h-5 text-gray-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-lg mb-1">{address.name}</span>
                    <span className="text-gray-700 mb-1">{address.address}</span>
                    <span className="text-gray-500">{address.phone}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="text-orange-500 hover:text-orange-600">
                    Change
                  </button>
                  <RadioGroupItem
                    value={address.id.toString()}
                    id={`address-${address.id}`}
                    className="sr-only"
                  />
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      selectedAddress === address.id.toString()
                        ? 'bg-orange-500'
                        : 'border-2 border-gray-300'
                    }`}
                  >
                    {selectedAddress === address.id.toString() && (
                      <Check className="w-4 h-4 text-white" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </RadioGroup>

      <div className="mt-6 flex justify-center">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 rounded-full">
          Add New Address
        </Button>
      </div>
    </div>
      </TabsContent>
    </Tabs>
    
    </>
  );
};





