/**
    * @description      : 
    * @author           : Saif
    * @group            : 
    * @created          : 15/09/2023 - 22:24:43
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/09/2023
    * - Author          : Saif
    * - Modification    : 
**/
import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from '../views/Home';

import Login from '../views/Auth/Login';
import RegistrationForm from '../views/Auth/RegistrationForm';
import ForgetPassword from '../views/Auth/ForgetPassword';
import OTPModule from '../views/Auth/ForgetPassword2';
import UpdatePassword from '../views/Auth/ForgetPassword3';
import { Blogs } from '../views/Blogs';


export const AppRouter = () => {
  return (
    <BrowserRouter basename='/mathKnots'>
        <Routes>
          <Route path='/' element={<Home />} />


          <Route path='/login' element={<Login />} />
          <Route path='/user-registration' element={<RegistrationForm />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/otp-step' element={<OTPModule />} />
          <Route path='/update-password' element={<UpdatePassword />} />
          <Route path='/blog-listing' element={<Blogs />} />

          {/* protected routes  */}

          {/* <Route path='/user-dashboard' element={<ProtectedRoutes Components={UserScreen} />} />
          <Route path='/proivder-list/provider-details/:id' element={<ProtectedRoutes Components={ProviderDetails} />} /> */}

    
        </Routes>
    </BrowserRouter>
  )
}
