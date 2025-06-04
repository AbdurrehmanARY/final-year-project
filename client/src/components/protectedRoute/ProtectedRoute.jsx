import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute({children,isAuthenticated,isAdmin}){
    // const navigate=useNavigate()
  
    // if(!isAuthenticated) return <Navigate to='/' />
    // if(!isAdmin) return <Navigate to='/' />
    
      return children ;


         


  return (
    <>
    </>
  )
}

export default ProtectedRoute
