import React, {useState} from 'react'

function Card(){

  
    
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  function onButtonClick(event) {
    event.preventDefault()
    if(email == '' || password == ''){
      alert("User doesn't exist")
    } else {
      alert("Welcome")
    }
  }
  return (
    <>
      <div className='login-card'>
        <h2>Movie App</h2>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Enter Email Address"
          onChange={(e) => setEmail(e.target.value)}
          required='true'
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          required='true'
        />
        <button className='login-btn' onClick={onButtonClick}> Login Now </button>
      </div>
    </>
  )
}

export default Card