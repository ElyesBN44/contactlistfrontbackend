import React from 'react'
import './ContactCard.css'
const ContactCard = ({mini}) => {
  return (
  <div className='htmlContactCard'>
    <div className='bodyContactCard'>
    <div className="card-container">
    <a className="hero-image-container">
      <img  
        className="hero-image"
        src="https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg"
        alt="Spinning glass cube"
      />
    </a>
    <main className="main-content">
      <h1>
        <a>{mini.name}</a>
      </h1>
      <p>{mini.lastName}</p>
      <div className="flex-row">
        <div className="coin-base">
          <img
            src="https://i.postimg.cc/T1F1K0bW/Ethereum.png"
            alt="Ethereum"
            className="small-image"
          />
          <h2>{mini.age}</h2>
        </div>
        <div className="time-left">
          <img
            src="https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png"
            alt="clock"
            className="small-image"
          />
          <p>3 days left</p>
        </div>
      </div>
    </main>
    <div className="card-attribute">
      <p>
        {mini.email}
      </p>
      
    </div>
  </div>
 </div> 
 </div>   
  )
}

export default ContactCard
