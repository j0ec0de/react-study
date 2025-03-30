import React from 'react'

function Card(){
  function onButtonClick() {
    alert("Logged in")
  }
  return (
    <>
      <div className='login-card'>
        <input
          type="text"
          name="email"
          placeholder="Enter Email Address"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
        />
        <button className='login-btn' onClick={onButtonClick}> Login Now </button>
      </div>
    </>
  )
}

export default Card