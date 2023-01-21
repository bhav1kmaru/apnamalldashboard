import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import MainDash from './MainDash/MainDash'
import Orders from './Orders/Orders'
import PrivateRoute from './PrivateRoute'
import Products from './Products/Products'
import RightSide from './RigtSide/RightSide'
import BasicTable from './Table/Table'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MainDash />
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        />
        <Route
          path="/updates"
          element={
            <PrivateRoute>
              <RightSide />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
           
              <Login />
            
          }
        />
      </Routes>
    </div>
  );
}

export default AllRoutes