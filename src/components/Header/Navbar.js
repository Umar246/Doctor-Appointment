import React from 'react'
import { images } from '../../assets/images'
import { Link } from 'react-router-dom'
export default function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light">
        <div className="container">
          <Link to={'/'} className="navbar-brand" style={{color:'#07085B'}}> Doctor Appointment  </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active" style={{color:'#07085B'}}>Home</Link>
              </li>
              {/* <li className="nav-item">
                <Link to={"/"} className="nav-link active" >About Us</Link>
              </li> */}
              <li className="nav-item">
                <Link to={"/blog"}  className="nav-link" style={{color:'#07085B'}} >Pages</Link>
              </li>
              <li className="nav-item">
                <Link to={"/BookDr"} className="nav-link" style={{color:'#07085B'}} >Doctors</Link>
              </li>
              <li className="nav-item">
                <Link to={"/contact"} className="nav-link" style={{color:'#07085B'}}>Contacts</Link>
              </li>
              
            </ul>
            <div className="d-flex">
                <Link to={"auth/login"} className="btn btn-outline" style={{color:'#07085B'}}>Signin</Link>
                <button type='button' className="btn btn-info text-white" style={{backgroundColor:'#07085B'}}>GET STARTED</button>
                
            </div>
          </div>
        </div>
      </nav>


    </>
  )
}
