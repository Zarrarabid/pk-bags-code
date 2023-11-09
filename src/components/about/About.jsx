
import React, { useEffect } from 'react'
import Navbar from '../../container/Navbar'
import './about.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import innovation from '../../images/Innovation.gif'
import Nerd from '../../images/Nerd.gif'
import fashion from '../../images/fashion shop.gif'
import Footer from '../../container/Footer/Footer';

function About() {
  useEffect(()=> {
    AOS.init();
  },[])
  return (
    <div id='main'>
      <Navbar />
      <div id='main' class="">
        <div class="container py-5">
          <div class="row h-100 align-items-center py-5">
            <div class="col-lg-6">
              <h1 class="display-4">About us page</h1>
              <p class="lead text-muted mb-0">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.</p>
              <p class="lead text-muted">placeholder text commonly
              </p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1500" class="col-lg-6 d-none d-lg-block">
              <img src={innovation} />
              </div>
          </div>
        </div>
      </div>

      <div class=" py-5">
        <div class="container py-5">
          <div class="row align-items-center mb-5">
            <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
              <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button class="btn btn-primary px-5 rounded-pill shadow-sm">Learn More</button>
            </div>
            <div data-aos="zoom-out-left" class="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img src={fashion} />
              </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-5 px-5 mx-auto">
              <img src={Nerd} />
              </div>
            <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
              <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button class="btn btn-primary px-5 rounded-pill shadow-sm">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default About