import React from 'react'
import './Singnup.css'
const Singnup = () => {
  return (
    <div className='singn'>
    <div className='singn-up'>
      <h1> SINGNUP-user</h1>
     <label>Username</label>
     <input type='text' name='Usernname'/>
     <label>Email</label>
     <input type='email'name='email'/>
     <label>Passsword</label>
     <input type='password'  name='password'/>
     <button>Submit</button>
    </div>
    </div>
  )
}

export default Singnup