// import { DashboardHeader } from "@/components/dashboard/dashboard-header"
// import { DashboardShell } from "@/components/dashboard/dashboard-shell"
// import { Overview } from "@/components/dashboard/overview"
// import RecentSale from "@/components/admin/dashboard/RecentSale"
import RecentSale from "@/components/admin/dashboard/RecentSale"
import Overview from "@/components/admin/dashboard/Overview"
// import { RecentSales } from "@/components/dashboard/recent-sales"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import TotalCard from "@/components/admin/dashboard/TotalCard"
import { useSelector } from "react-redux"
import { DollarSign, Package, ShoppingBag, Users } from "lucide-react"
function AdminDashboard() {
  const {listOfProduct}=useSelector((state)=>state.adminProducts)
  const {orderList}=useSelector((state)=>state.adminOrder)
  console.log("orderList",orderList.length)
  console.log("productList",listOfProduct.length)
const totalRevenue = orderList.reduce((sum, order) => sum + (order.total || 0), 0);

// console.log("productList of recent",orderList.reverse().slice(0,6))
const recentOrders = [...orderList].reverse().slice(0, 6);
recentOrders.map((Item,index)=>console.log('item',Item.id))



  return (
    <>
      {/* <DashboardShell> */}
      {/* <DashboardHeader heading="Dashboard" text="Overview of your store" /> */}
      {/* grid items-start gap-8 */}
    <div className="grid items-start gap-8">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      
      
      
      <TotalCard
      // total={listOfProduct.length}
          title='Total Revanue'
          value={totalRevenue.toLocaleString()} 
          change="+20.1%" 
          icon={DollarSign}
          index={0}
      
      />
      <TotalCard
       title="Total Orders" 
          value={orderList.length}
          change="+15.2%" 
          icon={ShoppingBag}
          index={1}
      />
      <TotalCard
      title="Total Customers" 
          value="1" 
          change="+8.5%" 
          icon={Users}
          index={2}
      />
      <TotalCard
      title="Products" 
          value={listOfProduct.length}
          change="+3.2%" 
          icon={Package}
          index={3}
      />

      
      
      
      
      
        {/* <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card> */}
        {/* <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">+19% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">+201 since last hour</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inventory</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,324</div>
            <p className="text-xs text-muted-foreground">Products in stock</p>
          </CardContent>
        </Card> */}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSale recentOrders={recentOrders} />
          </CardContent>
        </Card>
      </div>
    </div>
      
    {/* </DashboardShell> */}
    
    
    </>
  )
}

export default AdminDashboard