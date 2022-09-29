import React from 'react'
import HotelIcon from '@mui/icons-material/Hotel';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import AttractionsIcon from '@mui/icons-material/Attractions';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import './header.css'
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from  "date-fns"


function Header() {
  const [openDate, setOpenDate] = useState(false)

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  return (
    <div className='header'>
      <div className="headerContainer">
        <div className='headerList'>
          <div className="headerListItem active">
            <HotelIcon />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <LocalAirportIcon />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <DirectionsCarFilledIcon />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <AttractionsIcon />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <LocalTaxiIcon />
            <span>Airport Taxis </span>
          </div>


        </div>
        <h1 className="headerTitle">Book unique places to stay and things to do.</h1>
        <p className="headerDescription">Get rewarded for your travels - unlock instant savings of 10 percent of more with a free Julia's booking account</p>
        <button className="headerBtn">Sign In / Register</button>
        <div className='headerSearch'>
          <div className="headerSearchItem">
            <HotelIcon className='headerIcon' />
            <input type="text" placeholder='Where are you going?' className='headerSearchInput' />
          </div>
          <div className="headerSearchItem">
            <CalendarTodayIcon className='headerIcon'
              onClick={() => setOpenDate(!openDate)}/>
            <span
            onClick={() => setOpenDate(!openDate)}
            className='headerSearchText'>

              {`${format(date[0].startDate, 'dd MMMM yyyy')} - ${format(date[0].endDate, 'dd MMMM yyyy')}`}
            </span>
            {openDate &&  <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className='date'
            /> }

          </div>
          <div className="headerSearchItem">
            <PersonIcon className='headerIcon' />
            <span className='headerSearchText'>
              2 adults 2 children 1 room
            </span>
          </div>
          <div className="headerSearchItem">
            <button className='headerBtn'>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header