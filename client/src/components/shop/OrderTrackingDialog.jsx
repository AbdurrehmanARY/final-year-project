// import { CardDescription } from "@/components/ui/card"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle2,
  Clock,
  Package,
  Truck,
  Home,
  Search,
  Copy,
  ExternalLink,
  Phone,
  Mail,
  Calendar,
  X,
  AlertCircle,
  PackageCheck,
  ShoppingCart,
} from "lucide-react"
const OrderStatus = {
  PENDING: "PENDING",
  PROCESSING: "PROCESSING",
  SHIPPED: "SHIPPED",
  DELIVERED: "DELIVERED",
  CANCELLED: "CANCELLED",
}

function OrderTrackingDialog({orderDetails}) {
    console.log('orderdetail',orderDetails)
      const [isOpen, setIsOpen] = useState(false)
  const [trackingNumber, setTrackingNumber] = useState("TRK789456123")
//   const [currentOrderStatus, setCurrentOrderStatus] = useState("SHIPPED")

  function getCurrentLocation(status) {
    switch (status) {
      case "PENDING":
        return "Order Queue"
      case "PROCESSING":
        return "Fulfillment Center"
      case "SHIPPED":
        return "Distribution Center - Chicago"
      case "DELIVERED":
        return "Delivered to Customer"
      case "CANCELLED":
        return "Order Cancelled"
      default:
        return "Unknown"
    }
  }

  function getProgressPercentage(status) {
    switch (status) {
      case "PENDING":
        return 10
      case "PROCESSING":
        return 35
      case "SHIPPED":
        return 75
      case "DELIVERED":
        return 100
      case "CANCELLED":
        return 0
      default:
        return 0
    }
  }

  function getStatusBadgeStyle(status) {
    switch (status) {
      case "PENDING":
        return "bg-gradient-to-r from-yellow-500 to-amber-500 text-white border-0"
      case "PROCESSING":
        return "bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0"
      case "SHIPPED":
        return "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0"
      case "DELIVERED":
        return "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0"
      case "CANCELLED":
        return "bg-gradient-to-r from-red-500 to-rose-500 text-white border-0"
      default:
        return "bg-gray-500 text-white border-0"
    }
  }

  const orderData = {
    orderNumber: orderDetails?.id,
    trackingNumber: "TRK789456123",
    status: orderDetails?.status,
    estimatedDelivery: orderDetails?.status === "CANCELLED" ? "N/A" : "Dec 18, 2024",
    carrier: "Express Shipping",
    currentLocation: getCurrentLocation(orderDetails?.status),
    progress: getProgressPercentage(orderDetails?.status),
    customer: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
    },
    shippingAddress: {
      street: orderDetails?.address?.address,
      city: orderDetails?.address?.city,
      state: "NY",
      zip: orderDetails?.address?.postelCode,
    },
  }

  const trackingEvents = [
    {
      id: 1,
      title: "Order Placed",
      description: "Your order has been received and is awaiting confirmation.",
      time: "Dec 15, 2024 - 2:30 PM",
      location: "Online Store",
      status: "PENDING",
      icon: ShoppingCart,
    },
    {
      id: 2,
      title: "Order Processing",
      description: "We're preparing your items and processing your order.",
      time: "Dec 15, 2024 - 4:15 PM",
      location: "Fulfillment Center - Newark, NJ",
      status: "PROCESSING",
      icon: Package,
    },
    {
      id: 3,
      title: "Order Shipped",
      description: "Your order has been shipped and is on its way to you.",
      time: "Dec 16, 2024 - 9:00 AM",
      location: "Distribution Center - Chicago, IL",
      status: "SHIPPED",
      icon: Truck,
    },
    {
      id: 4,
      title: "Order Delivered",
      description: "Your package has been successfully delivered.",
      time: "Expected: Dec 18, 2024 - 2:00 PM",
      location: orderData.shippingAddress.street,
      status: "DELIVERED",
      icon: Home,
    },
  ]

  function getEventStatus(eventStatus, currentStatus) {
    if (currentStatus === "CANCELLED") {
      return eventStatus === "PENDING" ? "completed" : "cancelled"
    }

    const statusOrder = ["PENDING", "PROCESSING ", "SHIPPED", "DELIVERED"]
    const eventIndex = statusOrder.indexOf(eventStatus)
    const currentIndex = statusOrder.indexOf(currentStatus)

    if (eventIndex < currentIndex) return "completed"
    if (eventIndex === currentIndex) return "current"
    return "pending"
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }


  return (
    <div className="space-y-4">
      

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6">
            <Package className="w-4 h-4 mr-2" />
            Track Your Order
          </Button>
        </DialogTrigger>

        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
          <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50 p-6 border-b">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Order Tracking
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Track your package in real-time and get detailed delivery updates
              </DialogDescription>
            </DialogHeader>

            {/* Quick Search */}
            <div className="mt-4 flex gap-2">
              <div className="flex-1">
                <Label htmlFor="tracking-input" className="sr-only">
                  Tracking Number
                </Label>
                <Input
                  id="tracking-input"
                  placeholder="Enter tracking number..."
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="bg-white/80 backdrop-blur-sm border-white/20 rounded-full"
                />
              </div>
              <Button size="icon" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="overflow-y-auto max-h-[calc(90vh-200px)]">
            <Tabs defaultValue="tracking" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mx-6 mt-4 bg-orange-50 p-1 rounded-full">
                <TabsTrigger
                  value="tracking"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                >
                  Tracking
                </TabsTrigger>
                <TabsTrigger
                  value="details"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                >
                  Details
                </TabsTrigger>
                <TabsTrigger
                  value="support"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                >
                  Support
                </TabsTrigger>
              </TabsList>

              <TabsContent value="tracking" className="p-6 space-y-6">
                {/* Status Overview */}
                <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-r from-white to-gray-50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{orderDetails?.id}</h3>
                        <p className="text-sm text-muted-foreground">
                          {orderDetails?.status === "CANCELLED"
                            ? "Order was cancelled"
                            : `Estimated delivery: ${orderData.estimatedDelivery}`}
                        </p>
                      </div>
                      <Badge className={getStatusBadgeStyle(orderDetails?.status)}>{orderDetails?.status}</Badge>

                    </div>

                    {orderDetails?.status !== "CANCELLED" ? (
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Delivery Progress</span>
                          <span>{orderData.progress}% Complete</span>
                        </div>
                        <Progress value={orderData.progress} className="h-3" />
                        <p className="text-sm text-muted-foreground">
                          Currently at: <span className="font-medium">{orderData.currentLocation}</span>
                        </p>
                      </div>
                    ) : (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 text-red-700">
                          <AlertCircle className="w-5 h-5" />
                          <span className="font-medium">Order Cancelled</span>
                        </div>
                        <p className="text-sm text-red-600 mt-1">
                          This order has been cancelled. If you have any questions, please contact our support team.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Tracking Timeline */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-orange-500" />
                      Order Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      {/* Timeline Line */}
                      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 to-gray-300" />

                      <div className="space-y-6">
                        {trackingEvents.map((event, index) => {
                          const Icon = event.icon
                          const eventStatus = getEventStatus(event.status, orderDetails?.status)
                          const isCompleted = eventStatus === "completed"
                          const isCurrent = eventStatus === "current"
                          const isPending = eventStatus === "pending"
                          const isCancelled = eventStatus === "cancelled"

                          return (
                            <div
                              key={event.id}
                              className={`relative flex items-start gap-4 transition-all duration-500 ${
                                isCurrent ? "animate-pulse" : ""
                              } ${isCancelled ? "opacity-50" : ""}`}
                              style={{
                                animationDelay: `${index * 100}ms`,
                              }}
                            >
                              {/* Timeline Dot */}
                              <div className="relative z-10 flex-shrink-0">
                                <div
                                  className={`
                                  w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg
                                  ${
                                    isCompleted
                                      ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                                      : isCurrent
                                        ? "bg-gradient-to-r from-orange-500 to-red-500 text-white animate-pulse"
                                        : isCancelled
                                          ? "bg-gradient-to-r from-red-400 to-red-500 text-white"
                                          : "bg-gradient-to-r from-gray-300 to-gray-400 text-gray-600"
                                  }
                                `}
                                >
                                  {isCancelled ? <X className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                                </div>
                              </div>

                              {/* Content */}
                              <div className="flex-1 min-w-0 pb-6">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4
                                    className={`font-semibold ${
                                      isPending || isCancelled ? "text-muted-foreground" : "text-foreground"
                                    }`}
                                  >
                                    {event.title}
                                  </h4>
                                  {isCurrent && (
                                    <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700">
                                      Current
                                    </Badge>
                                  )}
                                  {isCompleted && <CheckCircle2 className="w-4 h-4 text-green-600" />}
                                  {isCancelled && <X className="w-4 h-4 text-red-500" />}
                                </div>

                                <p className="text-sm text-muted-foreground mb-2">
                                  {isCancelled ? "This step was not completed due to cancellation." : event.description}
                                </p>

                                <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    <span>{event.time}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <PackageCheck className="w-3 h-3" />
                                    <span>{event.location}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="details" className="p-6 space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  {/* Order Information */}
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Package className="w-5 h-5 text-orange-500" />
                        Order Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Order Number:</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm">{orderData.orderNumber}</span>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-6 w-6 rounded-full"
                            onClick={() => copyToClipboard(orderData.orderNumber)}
                          >
                            <Copy className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Tracking Number:</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm">{orderData.trackingNumber}</span>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-6 w-6 rounded-full"
                            onClick={() => copyToClipboard(orderData.trackingNumber)}
                          >
                            <Copy className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Carrier:</span>
                        <span className="text-sm font-medium">{orderData.carrier}</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Status:</span>
                        <Badge className={getStatusBadgeStyle(orderDetails?.status)}>{orderDetails?.status}</Badge>
                      </div>

                      {orderDetails?.status !== "CANCELLED" && (
                        <Button variant="outline" className="w-full mt-4 rounded-full">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Track on Carrier Website
                        </Button>
                      )}
                    </CardContent>
                  </Card>

                  {/* Delivery Information */}
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Home className="w-5 h-5 text-green-500" />
                        Delivery Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <span className="text-sm text-muted-foreground">
                          {orderDetails.status === "CANCELLED" ? "Was Expected:" : "Estimated Delivery:"}
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="w-4 h-4 text-orange-500" />
                          <span
                            className={`font-medium ${orderDetails?.status === "CANCELLED" ? "line-through text-muted-foreground" : ""}`}
                          >
                            {orderData.estimatedDelivery}
                          </span>
                        </div>
                      </div>

                      <div>
                        <span className="text-sm text-muted-foreground">Delivery Address:</span>
                        <div className="mt-1 text-sm">
                          <p>{orderDetails?.address.address}</p>
                          <p>
                            {orderDetails?.address.city},
                             {/* {orderData.shippingAddress.state}{" "} */}
                            {orderDetails?.address.postelCode}
                          </p>
                        </div>
                      </div>

                      <div>
                        <span className="text-sm text-muted-foreground">Recipient:</span>
                        <p className="font-medium mt-1">{orderDetails.users.userName}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="support" className="p-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-orange-500" />
                      Need Help?
                    </CardTitle>
                    <CardDescription>
                      Our customer support team is here to help with any questions about your order.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Button variant="outline" className="h-auto p-4 flex-col items-start rounded-full">
                        <div className="flex items-center gap-2 mb-2">
                          <Phone className="w-4 h-4 text-orange-500" />
                          <span className="font-medium">Call Support</span>
                        </div>
                        <span className="text-sm text-muted-foreground">1-800-SUPPORT</span>
                        <span className="text-xs text-muted-foreground">Mon-Fri 9AM-6PM EST</span>
                      </Button>

                      <Button variant="outline" className="h-auto p-4 flex-col items-start rounded-full">
                        <div className="flex items-center gap-2 mb-2">
                          <Mail className="w-4 h-4 text-green-500" />
                          <span className="font-medium">Email Support</span>
                        </div>
                        <span className="text-sm text-muted-foreground">support@company.com</span>
                        <span className="text-xs text-muted-foreground">Response within 24 hours</span>
                      </Button>
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Frequently Asked Questions</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>• What if my package is delayed?</p>
                        <p>• How do I change my delivery address?</p>
                        <p>• Can I schedule a specific delivery time?</p>
                        <p>• What if I'm not home during delivery?</p>
                        <p>• How do I cancel my order?</p>
                      </div>
                      <Button variant="link" className="p-0 h-auto mt-2 text-orange-600">
                        View all FAQs →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default OrderTrackingDialog
