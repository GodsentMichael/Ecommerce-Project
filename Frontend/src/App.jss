import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage, SignupPage, ActivationPage, HomePage, ProductsPage, BestSellingPage, EventsPage, FAQPage } from './Routes.js';
import { toast, ToastContainer } from 'react-toastify';
import { server } from './server';
import 'react-toastify/dist/ReactToastify.css';
import Store from "./redux/store";
import { loadUser } from './redux/actions/user.js';
import './App.css';

const App = () => {

useEffect(() => {
    Store.dispatch(loadUser());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/activation" element={<ActivationPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="*" element={<LoginPage />} /> */}
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/best-selling' element={<BestSellingPage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/faq' element={<FAQPage />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
};

export default App;
