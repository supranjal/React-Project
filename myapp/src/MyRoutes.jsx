import React from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './pages/Home';
import About from "./pages/About";
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Counter from './pages/Counter';
const MyRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='counter' element={<Counter/>}/>
      </Route>
        
    </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes