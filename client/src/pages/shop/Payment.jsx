
import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import PaymentSuccess from "../../components/shop/PaymentSuccess"
import { Button } from "../../components/ui/button"
import { useDispatch, useSelector } from "react-redux"
import { confirmPayment, createNewOrder } from "@/store/shop/order"
import { fetchAllAddresses } from "@/store/shop/adress"
import { toast } from "sonner"
import { fetchCartItems } from "@/store/shop/cart"
import { loadStripe } from "@stripe/stripe-js"

function Payment() {
    const [paymentMethod, setPaymentMethod] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAddress , setSelectedAddress] = useState("");
    const [order,setOrder] = useState(null);
    
    const dispatch=useDispatch()
    const {isAuthenticated,user}=useSelector((state)=>state.auth)
    const {addressList}=useSelector((state)=>state.address)
    const cartItems = useSelector((state) => state.shoppingCart.cartItems || []);
    const {orderDetails}=useSelector((state) => state.shopOrder)
    const [searchParams, setSearchParams] = useSearchParams();
   const orderId = searchParams?.get("orderId");
const success = searchParams?.get("success");
const paymentId = searchParams?.get("session_id");

    const payerId=user?.id

 useEffect(() => {
  // Only run if payment was successful and all IDs are present
  if (success === "true" && paymentId && orderId && payerId) {
    console.log('paymentId', paymentId);
    console.log('orderId', orderId);
    console.log('payerId in use effect', payerId);
    console.log('confirmation');
    dispatch(confirmPayment({ paymentId, orderId, payerId })).then((data) => {
      if (data?.payload?.success) {
        setOrder(data?.payload?.order);
        setIsModalOpen(true);
      }
    });
  }
}, [success, paymentId, orderId, payerId, dispatch]);
console.log("order",order)
// console.log("orderDetails after confirmation",orderDetails)
// useEffect(()=>{
     
//   }

// },[success , paymentId ,orderId])





useEffect(()=>{
const getAdress=async()=>{
  const response=await  dispatch(fetchAllAddresses(user?.id))
     const addresses = response?.payload?.address || [];
const defaultAddress = addresses.find(addr => addr.isDefault);
    if (defaultAddress) {
      setSelectedAddress(defaultAddress.id);
    } else if (addresses.length > 0) {
      setSelectedAddress(addresses[0].id); // fallback
    }
}
   getAdress()
   
},[dispatch,user])
   const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 15.0 : 0;
  const total = subtotal + shipping;



const handlePayment=async()=>{
  const orderData={

        userId:user?.id,
        addressId: selectedAddress,
        items: cartItems.map((item) => ({
          productId: item.productId,
          productName: item.productName,
          image:item.image,
          // productCategory: item.category,
          quantity: item.quantity,
          // size: item.size,
          // color: item.color,
          price: item.price,
        })),
        // couponId: appliedCoupon?.id,
        // total,
        paymentMethod: "CREDIT_CARD",
        paymentStatus: "COMPLETED",
        total,
        // paymentId: data.id,
  }
  console.log('order is',orderData)
  const stripePromise = loadStripe('pk_test_51RRC47DFWa7DWEgDsjVVSoQ7g9KiGCE3TuZVKUAkrc5KlL6kpUsyE1HHHCMp56W6xt47qnRIIKmxMB8WZ6TI2foo00aTgUJgiF');
  const resposne=await dispatch(createNewOrder(orderData))
  console.log('res',resposne)
  setOrder(resposne?.payload?.order)
  if(resposne?.payload?.success){
    toast(resposne?.payload?.message)
  window.location.replace(resposne?.payload?.sessionUrl)
    dispatch(fetchCartItems(user.id));
  }
}




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
                    
                  </div>
                  <div className="flex gap-2">
                    <img className="h-6" src="src/assets/stripe-seeklogo.svg" alt="stripe"/>
                    {/* <p className="font-medium">Stripe</p> */}
                  </div>
                </div>
                <div className="h-5 w-5 md:h-6 md:w-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                  {paymentMethod === "paypal" && (
                    <div className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-orange-500"></div>
                  )}
                </div>
              </div>

              {/* <div
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
              </div> */}
            </div>
          </div>

          {/* Credit Card */}
          
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
        onClick={() => {setIsModalOpen(true) , handlePayment()}}
        className="w-full bg-orange-500 text-white py-3 px-4 rounded-full mt-4 md:mt-6 hover:bg-orange-600 transition-colors"
      >
                      Continue To Payment

      </Button>
      
      <PaymentSuccess
      user={user}
      order={order}
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