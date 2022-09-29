import React from 'react'
import './emailList.css'

function EmailList() {
  return (
    <div className='mail'>
      <h1 className='mailTitle'>Save time, save money!</h1>
      <span className="mailDesc">
        Sign up for our newsletter to get the latest deals and special offers.
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your email" className="mailInput" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default EmailList