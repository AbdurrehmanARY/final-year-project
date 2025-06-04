import { Link, useNavigate } from "react-router-dom"
import { ChevronRight, Check } from "lucide-react"
import PaymentSuccess from "../../components/shop/PaymentSuccess"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { Button } from "../../components/ui/button"
import { useDispatch, useSelector } from "react-redux"
import { addNewAddress } from "@/store/shop/adress"
import { toast } from "sonner"

function Checkout() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.shoppingCart.cartItems || []);
  const { addressList } = useSelector((state) => state.address)


  const { isAuthenticated, user } = useSelector((state) => state.auth)
  //  const {isAuthenticated,user}=isAuth
  const { register, handleSubmit,formState: { isValid },reset } = useForm({
    defaultValues: {
      addressName: "",
      phone: "",
      address: "",
      city: "",
      postelCode: "",
      userId: ''
    },
    mode: 'onChange'  // enables real-time validation
  });
  
  const [formData, setFormData] = useState({})

  const onSubmitForm = async (data) => {
    // if (addressList.length >= 3) {
    //   toast("You can't add more than 3 addresses");
    //   return;
    // }
  
    setFormData(data)
    let userId = user?.id
    const response = await dispatch(addNewAddress({ ...data, userId }))

    if (response?.payload?.success) {
      toast(response?.payload?.message)
      reset(); // Clear the form after successful submission
    navigate('/payment')

    }

  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 15.0 : 0;
  const total = subtotal + shipping;
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const discount = 15
  const discountAmount = (subtotal * discount) / 100;
  const grandTotal = (total + shipping) - discountAmount
  return (
    <>
      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-500 mb-6 md:mb-8">
          <Link href="/cart" className="hover:text-gray-700">
            My Cart
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/checkout" className="font-medium text-gray-900">
            Checkout
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-500">Payment</span>
        </nav>

        <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Left Column - Form */}
          <div className="w-full md:w-2/3 order-2 md:order-1">


            {/* Shipping Address */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-base md:text-lg font-medium mb-3 md:mb-4">Shipping Address</h2>
              <div className="space-y-3 md:space-y-4">
                <input {...register('addressName',{ required: "address name is required" }) }
                  type="text"
                  placeholder="e.g Home, Office, etc."
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <div className="grid grid-cols-1  gap-3 md:gap-4">
                  {/* <input {...register('email')}
                  type="email"
                  placeholder="Email address"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                /> */}
                  <input
                    {...register('phone', { required: "phone is required" })}
                    type="tel"
                    placeholder="Phone number"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <input
                  {...register('address', { required: "address is required" })}
                  type="text"
                  placeholder="Enter street name and house number"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <div className="grid grid-cols-1  gap-3 md:gap-4">
                  {/* <input
                  type="text"
                  placeholder="City"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                /> */}
                  <div className="relative">
                    <select {...register('city', { required: "city is required" }) } className="w-full p-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option value="">Select city</option>
                      <option value="California">California</option>
                      <option value="New York">New York</option>
                      <option value="Texas">Texas</option>
                      <option value="Florida">Florida</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <input
                  {...register('postelCode' ,{ required: "Postal code is required" } )}
                  type="text"
                  placeholder="Enter your postal code"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Shipping Method */}
            {/* <div>
            <h2 className="text-base md:text-lg font-medium mb-3 md:mb-4">Shipping Method</h2>
            <div className="space-y-3 md:space-y-4">
              <div className="border border-gray-300 rounded-md p-3 md:p-4 flex justify-between items-center bg-white">
                <div className="flex items-center">
                  <div className="mr-3 md:mr-4">
                    <img
                      src="https://www.dhl.com/content/dam/dhl/global/core/images/logos/dhl-logo.svg"
                      alt="DHL"
                      className="h-6 md:h-8"
                    />
                  </div>
                  <div>
                    <p className="font-medium">DHL</p>
                    <p className="text-gray-500 text-xs md:text-sm">3 business days</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 font-medium">Free</span>
                  <div className="h-5 w-5 md:h-6 md:w-6 rounded-full border-2 border-orange-500 flex items-center justify-center bg-orange-500">
                    <Check className="h-3 w-3 md:h-4 md:w-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="border border-gray-300 rounded-md p-3 md:p-4 flex justify-between items-center bg-white">
                <div className="flex items-center">
                  <div className="mr-3 md:mr-4">
                    <img
                      src="https://www.fedex.com/content/dam/fedex-com/logos/logo.png"
                      alt="FedEx"
                      className="h-6 md:h-8"
                    />
                  </div>
                  <div>
                    <p className="font-medium">FedEx</p>
                    <p className="text-gray-500 text-xs md:text-sm">Next day</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 font-medium">$0.88</span>
                  <div className="h-5 w-5 md:h-6 md:w-6 rounded-full border-2 border-gray-300 flex items-center justify-center"></div>
                </div>
              </div>
            </div>
          </div> */}
          </div>

          {/* Right Column - Order Summary */}
          <div className="w-full md:w-1/3 order-1 md:order-2 mb-6 md:mb-0">
            <div className="border border-gray-200 rounded-lg p-4 md:p-6 bg-white">
              <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Order Summary</h2>

              {cartItems.map((cartItem) => (
                <div className="flex items-start mb-4 md:mb-6">
                  <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-md overflow-hidden mr-3 md:mr-4">

                    <img
                      src={cartItem.image}
                      alt={cartItem?.productName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-start">{cartItem?.productName}</h3>
                    <p className="text-gray-500 text-xs md:text-sm text-start">
                      {/* Beiges <span className="ml-1 md:ml-2">M</span> */}
                      {/* {cartItem?.category} */}
                    </p>
                    <div className="flex justify-between items-center mt-1">
                      <p className="font-medium">Rs.{cartItem.price}</p>
                      <p className="text-gray-500 text-xs md:text-sm">x{cartItem.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}

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
                  <span className="font-medium">{total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="font-medium">{discount}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Cost</span>
                  <span className="font-medium">Rs.{shipping}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-2 md:pt-3">
                  <span className="font-medium">Total</span>
                  <span className="font-bold">Rs{grandTotal}</span>
                </div>
              </div>

              {/* <Link href="/payment"> */}
              <Button
                type='submit'
                        disabled={!isValid}
        // className={`px-4 py-2 rounded ${
        //   isValid ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
        // }`}

                className="w-full bg-orange-500 text-white py-3 px-4 rounded-full mt-4 md:mt-6 hover:bg-orange-600 transition-colors"
                >
                Continue To Payment
              </Button>
              {/* <PaymentSuccess/> */}
              {/* </Link> */}
            </div>
          </div>
        </form>
      </div>

    </>
  )
}

export default Checkout