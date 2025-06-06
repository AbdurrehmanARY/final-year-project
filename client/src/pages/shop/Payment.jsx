
import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import PaymentSuccess from "../../components/shop/PaymentSuccess"
import { Button } from "../../components/ui/button"

function Payment() {
    const [paymentMethod, setPaymentMethod] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
   <>
   <div className="container mx-auto px-4 py-6 md:py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-gray-500 mb-6 md:mb-8">
        <Link href="/cart" className="hover:text-gray-700">
          My Cart
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link href="/checkout" className="hover:text-gray-700">
          Checkout
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-gray-900 font-medium">Payment</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Left Column - Payment Form */}
        <div className="w-full md:w-2/3 order-2 md:order-1">
          {/* Payment Method */}
          <div className="mb-6 md:mb-8">
            <h2 className="text-base md:text-lg font-medium mb-3 md:mb-4">Select Payment Method</h2>
            <div className="space-y-3 md:space-y-4">
              <div
                className={`border rounded-md p-3 md:p-4 flex justify-between items-center cursor-pointer ${
                  paymentMethod === "paypal" ? "border-orange-500" : "border-gray-300"
                }`}
                onClick={() => setPaymentMethod("paypal")}
              >
                <div className="flex items-center">
                  <div className="mr-3 md:mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="20"
                      viewBox="0 0 124 33"
                      className="md:scale-125"
                    >
                      <path
                        fill="#253B80"
                        d="M46.211 6.749h-6.839a.95.95 0 0 0-.939.802l-2.766 17.537a.57.57 0 0 0 .564.658h3.265a.95.95 0 0 0 .939-.803l.746-4.73a.95.95 0 0 1 .938-.803h2.165c4.505 0 7.105-2.18 7.784-6.5.306-1.89.013-3.375-.872-4.415-.97-1.142-2.694-1.746-4.985-1.746zM47 13.154c-.374 2.454-2.249 2.454-4.062 2.454h-1.032l.724-4.583a.57.57 0 0 1 .563-.481h.473c1.235 0 2.4 0 3.002.704.359.42.469 1.044.332 1.906zM66.654 13.075h-3.275a.57.57 0 0 0-.563.481l-.145.916-.229-.332c-.709-1.029-2.29-1.373-3.868-1.373-3.619 0-6.71 2.741-7.312 6.586-.313 1.918.132 3.752 1.22 5.031.998 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .562.66h2.95a.95.95 0 0 0 .939-.803l1.77-11.209a.568.568 0 0 0-.561-.658zm-4.565 6.374c-.316 1.871-1.801 3.127-3.695 3.127-.951 0-1.711-.305-2.199-.883-.484-.574-.668-1.391-.514-2.301.295-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.499.589.697 1.411.554 2.317zM84.096 13.075h-3.291a.954.954 0 0 0-.787.417l-4.539 6.686-1.924-6.425a.953.953 0 0 0-.912-.678h-3.234a.57.57 0 0 0-.541.754l3.625 10.638-3.408 4.811a.57.57 0 0 0 .465.9h3.287a.949.949 0 0 0 .781-.408l10.946-15.8a.57.57 0 0 0-.468-.895z"
                      />
                      <path
                        fill="#179BD7"
                        d="M94.992 6.749h-6.84a.95.95 0 0 0-.938.802l-2.766 17.537a.569.569 0 0 0 .562.658h3.51a.665.665 0 0 0 .656-.562l.785-4.971a.95.95 0 0 1 .938-.803h2.164c4.506 0 7.105-2.18 7.785-6.5.307-1.89.012-3.375-.873-4.415-.971-1.142-2.694-1.746-4.983-1.746zm.789 6.405c-.373 2.454-2.248 2.454-4.062 2.454h-1.031l.725-4.583a.568.568 0 0 1 .562-.481h.473c1.234 0 2.4 0 3.002.704.359.42.468 1.044.331 1.906zM115.434 13.075h-3.273a.567.567 0 0 0-.562.481l-.145.916-.23-.332c-.709-1.029-2.289-1.373-3.867-1.373-3.619 0-6.709 2.741-7.311 6.586-.312 1.918.131 3.752 1.219 5.031 1 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .564.66h2.949a.95.95 0 0 0 .938-.803l1.771-11.209a.571.571 0 0 0-.565-.658zm-4.565 6.374c-.314 1.871-1.801 3.127-3.695 3.127-.949 0-1.711-.305-2.199-.883-.484-.574-.666-1.391-.514-2.301.297-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.501.589.699 1.411.554 2.317zM119.295 7.23l-2.807 17.858a.569.569 0 0 0 .562.658h2.822c.469 0 .867-.34.939-.803l2.768-17.536a.57.57 0 0 0-.562-.659h-3.16a.571.571 0 0 0-.562.482z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">PayPal</p>
                  </div>
                </div>
                <div className="h-5 w-5 md:h-6 md:w-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                  {paymentMethod === "paypal" && (
                    <div className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-orange-500"></div>
                  )}
                </div>
              </div>

              <div
                className={`border rounded-md p-3 md:p-4 flex justify-between items-center cursor-pointer ${
                  paymentMethod === "applepay" ? "border-orange-500" : "border-gray-300"
                }`}
                onClick={() => setPaymentMethod("applepay")}
              >
                <div className="flex items-center">
                  <div className="mr-3 md:mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="md:scale-125"
                    >
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path>
                      <path d="M12 6v12"></path>
                      <path d="M6 12h12"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Apple Pay</p>
                  </div>
                </div>
                <div className="h-5 w-5 md:h-6 md:w-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                  {paymentMethod === "applepay" && (
                    <div className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-orange-500"></div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Credit Card */}
          <div>
            <h2 className="text-base md:text-lg font-medium mb-3 md:mb-4">Credit Card</h2>
            <div className="space-y-3 md:space-y-4">
              <input
                type="text"
                placeholder="Cardholder Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="text"
                placeholder="Card Number"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                <input
                  type="text"
                  placeholder="Expiration date (MM/YY)"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="Postal code"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="w-full md:w-1/3 order-1 md:order-2 mb-6 md:mb-0">
          <div className="border border-gray-200 rounded-lg p-4 md:p-6 bg-white">
            <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Order Summary</h2>

            <div className="flex items-start mb-4 md:mb-6">
              <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-md overflow-hidden mr-3 md:mr-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Section%20%289%29-VSGZ1SdRdxUpXzN3peBalfBLdDUrlR.png"
                  alt="Winter Coat"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Winter Coat</h3>
                <p className="text-gray-500 text-xs md:text-sm">
                  Beiges <span className="ml-1 md:ml-2">M</span>
                </p>
                <div className="flex justify-between items-center mt-1">
                  <p className="font-medium">$124.99</p>
                  <p className="text-gray-500 text-xs md:text-sm">x1</p>
                </div>
              </div>
            </div>

            <div className="mb-4 md:mb-6">
              <p className="text-gray-500 text-xs md:text-sm mb-1 md:mb-2">Discount Code</p>
              <input
                type="text"
                placeholder="Input discount code"
                className="w-full p-2 md:p-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="space-y-2 md:space-y-3 border-t border-gray-200 pt-3 md:pt-4 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium">$124.99</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="font-medium">-$12</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Cost</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2 md:pt-3">
                <span className="font-medium">Total</span>
                <span className="font-bold">$112.99</span>
              </div>
            </div>

            {/* <button className="w-full bg-orange-500 text-white py-3 px-4 rounded-full mt-4 md:mt-6 hover:bg-orange-600 transition-colors">
            </button> */}

            <Button 
        onClick={() => setIsModalOpen(true)}
        className="w-full bg-orange-500 text-white py-3 px-4 rounded-full mt-4 md:mt-6 hover:bg-orange-600 transition-colors"
      >
                      Continue To Payment

      </Button>
      
      <PaymentSuccess
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
            
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Payment