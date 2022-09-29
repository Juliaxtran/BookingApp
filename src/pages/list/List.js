import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import './list.css'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from "date-fns"
import { DateRange } from 'react-date-range';

function List() {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className='lsTitle'>
              Search
            </h1>

            {/* Destination Item  */}

            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>

            {/* Date  Item  */}
            <div className="lsItem">
              <label>Check In date </label>
              <span onClick={() => setOpenDate(!openDate)}>    {`${format(date[0].startDate, 'MM/dd/yyyy')} - ${format(date[0].endDate, 'MM/dd/yyyy')}`} </span>
              {openDate && <DateRange
                onChange={item => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />}
            </div>
            {/* Options Item  */}
            <div className="lsItem">
              <label > Options  </label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <div className="lsOptionText">
                    <span>    Min Price <small>per night</small></span>

                  </div>
                  <input className='lsOptionInput' type='number' />
                </div>
                <div className="lsOptionItem">
                  <div className="lsOptionText">
                    <span>Max Price <small>per night</small></span>
                  </div>
                  <input className='lsOptionInput' type='number' />
                </div>

                <div className="lsOptionItem">
                  <div className="lsOptionText">
                    <span> Adult</span>
                  </div>
                  <input
                    min={1}
                    className='lsOptionInput' type='number'
                    placeholder={options.adult} />
                </div>

                <div className="lsOptionItem">
                  <div className="lsOptionText">
                    <span>Children</span>
                  </div>
                  <input
                    min={0}
                    className='lsOptionInput' type='number'
                    placeholder={options.children} />
                </div>

                <div className="lsOptionItem">
                  <div className="lsOptionText">
                    <span> Room</span>
                  </div>
                  <input
                    min={1}
                    className='lsOptionInput'
                    type='number'
                    placeholder={options.room} />
                </div>
                <button >Search</button>
              </div>

            </div>
          </div>


          <div className='listResult'>

          </div>

        </div>
      </div>
    </div>
  )
}

export default List