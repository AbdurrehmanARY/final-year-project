import { useState } from "react"

import { MinusIcon, PlusIcon, ShoppingCart, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import Navbar from "./Navbar"
import EmptyCart from "./EmptyCart"
import { useNavigate } from "react-router-dom"

// Sample cart data - in a real app, this would come from a context or state management
const initialCartItems = [
    {
      id: 1,
      name: "Minimal Sneaker",
      price: 125.0,
      quantity: 1,
      image: "images/img.png",
    },
    {
      id: 2,
      name: "Classic Watch",
      price: 249.99,
      quantity: 2,
      image: "images/img.png",
    },
    {
      id: 3,
      name: "Designer Sunglasses",
      price: 89.5,
      quantity: 1,
      image: "images/img.png",
    },
  ]
  
  

function Cart({trigger}) {
    const [cartItems, setCartItems] = useState(initialCartItems)
  const [isOpen, setIsOpen] = useState(false)
  const navigate=useNavigate()

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return

    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    )
  }

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 15.0 : 0
  const total = subtotal + shipping

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
   <>
       <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative rounded-full">
        {trigger}
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full  bg-[#E16F3D] text-xs text-primary-foreground">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md px-6 py-4">

        
  <SheetHeader className="space-y-2.5">
    <SheetTitle className="text-2xl">My Cart</SheetTitle>
    <SheetDescription>
      {itemCount === 0
        ? "Your cart is empty"
        : `You have ${itemCount} item${itemCount !== 1 ? "s" : ""} in your cart`}
    </SheetDescription>
  </SheetHeader>

  {cartItems.length > 0 ? (
    <>
      <ScrollArea className="flex-1 pr-4 pl-2 my-6 max-h-[calc(80vh-10rem)]   overflow-y-auto ">
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-start gap-4">
              <div className="rounded-md overflow-hidden border bg-muted/50 flex-shrink-0">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div className="flex-1 space-y-1">
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <MinusIcon className="h-3 w-3" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <PlusIcon className="h-3 w-3" />
                    <span className="sr-only  text-red-500">Increase quantity</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 ml-auto text-destructive"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove item</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="space-y-4 px-4">
        <Separator />
        <div className="space-y-1.5">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <SheetFooter>
          <Button
          onClick={()=>{navigate('checkout'),setIsOpen(false)}}
          className="w-full bg-[#E16F3D] rounded-3xl" size="lg">
            Checkout
          </Button>
        </SheetFooter>
      </div>
    </>
  ) : (
    <EmptyCart/>
  )}
</SheetContent>
    </Sheet>

   </>
  )
}

export default Cart