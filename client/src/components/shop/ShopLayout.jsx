import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from '../../pages/shop/Footer'

function ShopLayout() {
  return (
    <div className= ' flex flex-col bg-white overflow-hidden'>
  <Navbar/>

<main className=' flex flex-col w-full my-5 px-12 bg-white overflow-hidden'>
  
  <Outlet/>

</main>
<Footer/>
    </div>
  )
}

export default ShopLayout