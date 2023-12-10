import React from 'react'
import { images } from '../../../assets/images/index'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <>
    <div className="container mt-5">
        <div className="row my-3">
          {/* <div className="col">
            <div className="d-flex justify-content-center">
              <img src={images.logo} alt="logo" style={{ width: "10rem" }} />
            </div>
          </div> */}
        </div>
      </div>
      <div className="container-fluid py-5 contactForm">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="box bg-white button1 p-5 rounded border border-2 border-primary">
              <div className="text-center">
                <h3 className='mb-5'> Register</h3>
                
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8">
                  <div className="mb-3">
                 
                    <input type="email" className="form-control shadow-none rounded-pill text-secondary" id="email" placeholder="Enter email" />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">

                <div className="col-12 col-md-8 col-lg-8">
                  <div className="mb-3">
                   
                    <input type="password" className="form-control shadow-none rounded-pill text-secondary" id="password" placeholder="Enter password" />
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mb-3">
                <div className="col-12 col-md-8 col-lg-8">
                  <Link to={"/"} className="btn mt-3 btn-primary text-white rounded-pill button1 w-100">REGISTER</Link>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8">
                  <p>Already Have An Account? <Link to={"/auth/login"} style={{textDecoration:'none'}}>Login</Link></p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
