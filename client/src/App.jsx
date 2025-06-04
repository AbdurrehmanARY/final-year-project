

import AuthLayout from './components/auth/AuthLayout'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"

import AdminLayout from './components/admin/AdminLayout'
import AdminProduct from './pages/admin/AdminProduct'
import AdminOrders from './pages/admin/AdminOrders'
import NotFound from './pages/not-found/NotFound'
import ShopLayout from './components/shop/ShopLayout'
// import Checkout from './pages/shop/Checkout'
import Checkout from './pages/shop/Checkout'
import Home from './pages/shop/Home'
import Listing from './pages/shop/Listing'
import ProductInfo from './pages/shop/ProductInfo'
import Payment from './pages/shop/Payment'
import Orders from './pages/shop/home/Orders'
import Adress from './pages/shop/home/Adress'
import Account from './pages/shop/home/Adress'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logoutUser, myProfile } from './store/auth'
import { useEffect } from 'react'
import AdminDashboard from './pages/admin/AdminDashboard'
import ProtectedRoute from './components/protectedRoute/ProtectedRoute'
// import Delete from './pages/auth/delete'


function App() {
  const dispatch=useDispatch()
   const isAuth=useSelector((state)=>state.auth)
   const {isAuthenticated,user}=isAuth


// dispatch(logoutUser())
// useEffect(() => {
//   const root = document.getElementById('root'); // Replace with your app's root element
//   if (open) {
//     root.setAttribute('inert', ''); // Disable interaction with the background
//   } else {
//     root.removeAttribute('inert'); // Re-enable interaction
//   }
// }, [open]);
    
    useEffect(()=>{
dispatch(myProfile())
    },[dispatch])

  return (
    <>
  <Router>
<Routes>
{/* admin Routes */}
<Route path="/admin" element=
{
<ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={user?.role==='ADMIN'?true:false}  >
<AdminLayout/>
</ProtectedRoute>
}>

<Route index element={<AdminDashboard/>}/>
<Route path="product" element={<AdminProduct/>}/> 
<Route path="orders" element={<AdminOrders/>}/> 
</Route>



<Route path="/" element={<ShopLayout/>}>
{/* <Route path="dashboard" element={<Dashboard/>}/> */}
<Route path="checkout" element={<Checkout/>}/>
<Route index  element={<Home/>}/>
<Route path="listing" element={<Listing/>}/>
<Route path="info/:id" element={<ProductInfo/>}/>
<Route path="checkout" element={<Checkout/>}/>
<Route path="payment" element={<Payment/>}/>
<Route path="order" element={<Orders/>}/>
<Route path="Account" element={<Account/>}/>









</Route>
<Route path="*" element={<NotFound/>}/> 

  </Routes>
</Router>
    </>
  )
}

export default App
