import React, { useEffect } from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../images/flat-woman-holding-shopping-bags-cartoon-wallpaper-modern-design-for-shopping-online-website-design-png.webp'
function Header() {
  useEffect(()=> {
    AOS.init();
  },[])
  return (
    <div>
      <div id='header' className='header d-flex justify-content-center '>
      <div className="row container ">
        <div className="col mx-auto">
          <div  className="row ">
            <div className="col d-flex justify-content-center">
              <div data-aos-duration="1500" data-aos="fade-right" className='d-flex flex-column align-item-center justify-content-center'>
              <h1>
                Welcome To Our Store 
                  <strong className='text-primary'> PK Store</strong>
              </h1>
              <p>We are a team of talented Designer making Products </p>
              <div className="mt-2">
                <NavLink to='/contact' className="custom-btn btn border-primary btn-light rounded-5 ">
                  Contact Now
                </NavLink>
              </div>
              </div>
              
            </div>
            
            <div id='imagemain' className="col-lg-6 order-1 order-lg-2 header-img">
              <img 
                src={img1}
                className='img-fluid animated' 
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header