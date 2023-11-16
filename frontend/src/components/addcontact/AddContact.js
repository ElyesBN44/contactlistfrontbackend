import React from 'react'
import './Addcontact.css'
const AddContact = () => {
  return (
    <div className='bodyAddContact'>
    <div className="container">
  
  <div className="card">
    <div className="card-image">
      <h2 className="card-heading">
        Get started<br></br>
        <small>Let us update your contact</small>
      </h2>
    </div>
    <form className="card-form">
      <div className="input">
        <input
          type="text"
          className="input-field"
          
          required=""
        />
        <label className="input-label">Full name</label>
      </div>
      <div className="input">
        <input
          type="text"
          className="input-field"
          
          required=""
        />
        <label className="input-label">Email</label>
      </div>
      <div className="input">
        <input type="password" className="input-field" required="" />
        <label className="input-label">Password</label>
      </div>
      <div className="action">
        <button className="action-button">Get started</button>
      </div>
    </form>
    <div className="card-info">
      
    </div>
  </div>
</div>
</div>
  )
}

export default AddContact
