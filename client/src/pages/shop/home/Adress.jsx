import React from 'react'
import { AddressSection } from '../../../components/shop/AdressSection';
import { Briefcase, Home } from 'lucide-react';
import { useState } from 'react';
function Account() {
    const [selectedAddress, setSelectedAddress] = useState("1");
    // Mock data for addresses
const addresses = [
    {
      id: 1,
      name: "My Home",
      address: "1536 Stellar Dr, Kenai, Alaska...",
      phone: "(907) 283-6173",
      icon: Home,
      isDefault: true
    },
    {
      id: 2,
      name: "Office",
      address: "2336 Jack Warren Rd, Delta...",
      phone: "(907) 283-6173",
      icon: Briefcase,
      isDefault: false
    }
  ];
  
  return (
  <>
   <AddressSection 
        addresses={addresses}
        selectedAddress={selectedAddress}
        setSelectedAddress={setSelectedAddress}
      />
  </>
  )
}

export default Account