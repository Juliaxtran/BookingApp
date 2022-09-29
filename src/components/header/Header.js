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
import { format } from "date-fns"


function Header({type}) {
  const [openDate, setOpenDate] = useState(false)

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })

  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev,
        [name]: operation === 'increase' ? options[name] + 1 : options[name] - 1
      };
    });
  };

  return (
    <div className='header'>
      {/* conditon with type  */}
      <div className={type === 'list'? "headerContainer listMode" : 'headerContainer'}>

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

        { type !== 'list' && <>
        <h1 className="headerTitle">Book unique places to stay and things to do.</h1>
        <p className="headerDescription">Get rewarded for your travels - unlock instant savings of 10 percent of more with a free Julia's booking account</p>
        <button className="headerBtn">Sign In / Register</button>
        <div className='headerSearch'>
          <div className="headerSearchItem">
            <HotelIcon className='headerIcon' />
            <input type="text" placeholder='Where are you going?' className='headerSearchInput' />
          </div>
          {/* Calender  */}
          <div className="headerSearchItem">
            <CalendarTodayIcon className='headerIcon'
              onClick={() => setOpenDate(!openDate)} />
            <span
              onClick={() => setOpenDate(!openDate)}
              className='headerSearchText'>
              {/* format date will make it readiable  */}

              {`${format(date[0].startDate, 'MM/dd/yyyy')} - ${format(date[0].endDate, 'MM/dd/yyyy')}`}
            </span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className='date'
            />}

          </div>
          <div className="headerSearchItem">
            <PersonIcon
              className='headerIcon'
              onClick={() => setOpenOptions(!openOptions)}
            />
            <span
              className='headerSearchText'
              onClick={() => setOpenOptions(!openOptions)}>
              {`${options.adult} Adults, ${options.children} Children, ${options.room} Room`}
            </span>
            {/* Options with buttons  */}
            {openOptions && <div className="options">
              {/* 1 OPTION ITEM  */}
              <div className="optionItem">
                <span className='optionText'>Adults</span>
                <div className="optionCounter">
                  {/* We can give it a disabled option so it doesn't go under 1  */}
                  <button
                    disabled={options.adult <= 1}
                    className='optionCounterButton'
                    onClick={() => handleOption('adult', 'decrease')}>
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button
                    className='optionCounterButton'
                    onClick={() => handleOption('adult', 'increase')}>
                    +</button>
                </div>
              </div>
              {/* 1 OPTION ITEM  */}
              <div className="optionItem">
                <span className='optionText'>Children</span>
                <div className="optionCounter">
                  <button
                    disabled={options.children <= 0}
                    className='optionCounterButton'
                    onClick={() => handleOption('children', 'decrease')}>-</button>
                  <span className="optionCounterNumber">{options.children}</span>
                  <button
                    className='optionCounterButton'
                    onClick={() => handleOption('children', 'increase')}>+</button>
                </div>
              </div>
              {/* 1 OPTION ITEM  */}
              <div className="optionItem">
                <span className='optionText'>Room</span>
                <div className="optionCounter">
                  <button
                    disabled={options.room <= 1}
                    className='optionCounterButton'
                    onClick={() => handleOption('room', 'decrease')}>-</button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button
                    className='optionCounterButton'
                    onClick={() => handleOption('room', 'increase')}>+</button>
                </div>
              </div>

            </div>}

          </div>
          <div className="headerSearchItem">
            <button className='headerBtn'>Search</button>
          </div>
        </div>
        </>}
      </div>
    </div>
  )
}

export default Header