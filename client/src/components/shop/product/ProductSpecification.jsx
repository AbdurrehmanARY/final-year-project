import React from 'react'
import Specification from './specification';

export default function ProductSpecification({singleProduct}) {

// "Mobile Phones"
 
    return (
    <>
     <div className="bg-gray-100 w-full min-h-screen ">
      <div className="max-w-5xl mx-auto">
       {singleProduct.category==="Mobile Phones" ?
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* General Features */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 font-medium bg-gray-100  text-blue-900">General Features</div>
              <div className="divide-y">
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">Release Date</div>
                  <div className="font-medium">19 Sept 2024</div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">{singleProduct?.specs?.sim.label}</div>
                  <div className="font-medium">{singleProduct?.specs?.sim.value}</div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">Phone Dimensions</div>
                  <div className="font-medium">7.9 mm</div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">Phone Weight</div>
                  <div className="font-medium">178 g</div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">{singleProduct.specs?.os.label}</div>
                  <div className="font-medium">{singleProduct.specs?.os.value}</div>
                </div>
              </div>
            </div>

            {/* Display */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 font-medium text-blue-900">Display</div>
              <div className="divide-y">
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">{singleProduct.specs?.displaySize.label}</div>
                  <div className="font-medium">{singleProduct.specs?.displaySize.value}</div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">{singleProduct.specs?.resolution.label}</div>
                  <div className="font-medium">{singleProduct.specs?.resolution.value}</div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">{singleProduct.specs?.displaytype.label}</div>
                  <div className="font-medium">{singleProduct.specs?.displaytype.value}</div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">Screen Protection</div>
                  <div className="font-medium">Corning Gorilla Glass 5</div>
                </div>
              </div>
            </div>

            {/* Memory */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 font-medium text-blue-900">Memory</div>
              <div className="divide-y">
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">Internal Memory</div>
                  <div className="font-medium">128/256 GB</div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">RAM</div>
                  <div className="font-medium">{singleProduct?.specs?.storage.value}</div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">Card Slot</div>
                  <div className="font-medium">No</div>
                </div>
              </div>
            </div>

            {/* Performance */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 font-medium text-blue-900">Performance</div>
              <div className="divide-y">
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">Processor</div>
                  <div className="font-medium">{singleProduct?.specs?.processor.value}</div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">GPU</div>
                  <div className="font-medium">Mali-G57 MP1</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Battery */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 font-medium text-blue-900">Battery</div>
              <div className="divide-y">
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">Type</div>
                  <div className="font-medium">{singleProduct?.specs?.battery.value}</div>
                </div>
              </div>
            </div>

            {/* Camera */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 font-medium text-blue-900">Camera</div>
              <div className="divide-y">
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">Front Camera</div>
                  <div className="font-medium">{singleProduct?.specs?.frontCamera.value}</div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">Front Flash Light</div>
                  <div className="font-medium">N/A</div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">Front Video Recording</div>
                  <div className="font-medium">Yes</div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">Back Flash Light</div>
                  <div className="font-medium">Yes</div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">Back Camera</div>
                  <div className="font-medium">{singleProduct.specs?.backCamera.value}</div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">Back Video Recording</div>
                  <div className="font-medium">Yes</div>
                </div>
              </div>
            </div>

            {/* Connectivity */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 font-medium text-blue-900">Connectivity</div>
              <div className="divide-y">
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">Bluetooth</div>
                  <div className="font-medium">Yes</div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">3G</div>
                  <div className="font-medium">Yes</div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">4G/LTE</div>
                  <div className="font-medium">Yes</div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">5G</div>
                  <div className="font-medium">No</div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">Radio</div>
                  <div className="font-medium">Unspecified</div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">WiFi</div>
                  <div className="font-medium">Yes</div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">NFC</div>
                  <div className="font-medium">Yes (market/region dependent)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
       :
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 font-medium bg-gray-100  text-blue-900">General Features</div>
              <div className="divide-y">
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">Release Date</div>
                  <div className="font-medium">19 Sept 2024</div>
                </div>
                 {Object.values(singleProduct?.specs || {}).map((spec, index) => (
  <div key={index} className="grid grid-cols-2 p-4">
    <div className="text-gray-600">{spec.label}</div>
    <div className="font-medium">{spec.value}</div>
  </div>
))}
                {/* <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">Phone Dimensions</div>
                  <div className="font-medium">7.9 mm</div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">Phone Weight</div>
                  <div className="font-medium">178 g</div>
                </div>
                <div className="grid grid-cols-2 p-4">
                  <div className="text-gray-600">{singleProduct.specs?.os.label}</div>
                  <div className="font-medium">{singleProduct.specs?.os.value}</div>
                </div> */}
              </div>
            </div>
       }
      </div>
    </div>
    
    
    </>
  )
}


