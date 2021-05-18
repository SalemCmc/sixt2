import React from 'react';
import Search from './Search';
import OfferList from './OfferList';
import ModalWindow  from './common/ModalWindow';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {

  return(    
    <>
      <ToastContainer/>
      <ModalWindow/> 
      <Search/>
      <OfferList/>               
    </>
  );
}

export default Main;