import React from 'react'
import "./Homepage.css"
import NavBar from '../navbar/NavBar'
const Homepage = () => {
  return (
    <div className='Homepage'>
<div className="container">
  <div className="content">
    <div className="square twitch" style={{ marginBottom: 50 }}>
      <span className="one" />
      <span className="two" />
      <span className="three" />
      <div className="circle">
        <h2 className="DrugRadar"> DrugRadar</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing el</p>
      </div>
    </div>
    <a href="{{route('dashboard.index')}}" className="button" target="_parent">
      <span className="actual-text">&nbsp;Dashboard&nbsp;</span>
      <span className="hover-text" aria-hidden="true">
        &nbsp;Dashboard&nbsp;
      </span>
    </a>
    <NavBar/>
  </div>
</div>
</div>
  )
}

export default Homepage
