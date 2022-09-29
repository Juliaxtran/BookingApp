import React from 'react'
import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import FmdGoodIcon from '@mui/icons-material/FmdGood';

function Hotel() {
  return (
    <div>
      <Navbar />
      <Header type='list'/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
         <h1 className='hotelTitle'> Grand Hotel</h1>
         <div className="hotelAddress">
        <FmdGoodIcon className='hotelIcon'/>
        <span>12948 Bukingham palace</span>
         </div>
         <span className='hotelDistance'>Excellent location - 500m from center</span>
         <span className='hotelPriceHighlight'>Book a stay over $114 at this property and get a free airport taxi</span>
        </div>
      </div>
    </div>
  )
}

export default Hotel