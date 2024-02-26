import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { useState } from 'react';
import FormikEdit from './component/FormikEdit';
import FormikCreate from './component/FormikCreate';
import Product from './component/Product';

const App = () => {
  const[id,setId]=useState(0)
  return (
    
      <BrowserRouter>
      <div>
      <Navbar />
      </div>
      
      <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/product' element={<Product setId={setId}/>} />
  {/* <Route path='/edit/:id' element={<Edit id={id} />}  /> */}

  <Route path='/FormikEdit/:id' element={<FormikEdit id={id} />}  />

  <Route path='/FormikCreate'  element={<FormikCreate />}/>


  {/* <Route path='/Create'  element={<Create />}/> */}
</Routes>
      </BrowserRouter>
    
  );
};

export default App;