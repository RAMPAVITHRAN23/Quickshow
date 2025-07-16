import React from 'react'
import Nav from './Components/Nav'
import { Route, Routes, useLocation } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Movies from './Pages/Movies'
import Moviedetails from './Pages/Moviedetails'
import Seatlayout from './Pages/Seatlayout'
import Mybookings from './Pages/Mybookings'
import Favourite from './Pages/Favourite'
import {Toaster} from 'react-hot-toast'
import Footer from './Components/Footer'

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin');


  return (
    <>
    <Toaster/>
    {!isAdminRoute && <Nav/>}
    <Routes>
      <Route path='/' element={ <Homepage/>}/>
      <Route path='/Movies' element={ <Movies/>}/>
      <Route path='/Movies:id' element={<Moviedetails/>}/>
      <Route path='/Movies:id/:date' element={<Seatlayout/>}/>
      <Route path='/my-bookings' element={ <Mybookings/>}/>
      <Route path='/favourite' element={ <Favourite/>}/>
    </Routes>
    {!isAdminRoute && <Footer/>}


    </>
    
    
  )
}

export default App