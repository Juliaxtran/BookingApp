import React from 'react'
import HotelIcon from '@mui/icons-material/Hotel';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import AttractionsIcon from '@mui/icons-material/Attractions';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';



function Header() {
  return (
    <div className='header'>
      <div className='headerList'>
        <div className="headerListItems">
        <HotelIcon />
        <span>Stays</span>
        </div>
        <div className="headerListItems">
        <LocalAirportIcon />
        <span>Flights</span>
        </div>
        <div className="headerListItems">
        <DirectionsCarFilledIcon/>
        <span>Car Rentals</span>
        </div>
        <div className="headerListItems">
        <AttractionsIcon />
        <span>Attractions</span>
        </div>
        <div className="headerListItems">
        <LocalTaxiIcon />
        <span>Airport Taxis </span>
        </div>


      </div>
    </div>
  )
}

export default Header