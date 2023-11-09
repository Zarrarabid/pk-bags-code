import React, { useEffect } from 'react'
import './login.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../../container/Navbar';
import { Checkbox, FormControlLabel } from '@mui/material';
function Login() {
  useEffect(()=> {
    AOS.init();
  },[])
  return (
    <div>
      <Navbar/>
      <div class="container-fluid">
        <div class="row no-gutter">
          {/* <!-- The image half --> */}
          <div data-aos="fade-right" class="col-md-6 d-none d-md-flex bg-image"></div>

          {/* <!-- The content half --> */}
          <div data-aos="fade-left" class="col-md-6 ">
            <div class="login d-flex align-items-center py-5">

              {/* <!-- Demo content--> */}
              <div class="container">
                <div class="row">
                  <div class="col-lg-10 col-xl-7 mx-auto">
                    <h3 class="display-4">PK Bag</h3>
                    <p class="text-muted mb-4">Login to get started temp.</p>
                    <form>
                      <div class="form-group mb-3">
                        <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4"/>
                      </div>
                      <div class="form-group mb-3">
                        <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                      </div>
                      <div class="custom-control custom-checkbox mb-3">
                          <FormControlLabel control={<Checkbox defaultChecked />} label="Remember password" />
                      </div>
                      <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                    
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- End --> */}

            </div>
          </div>
          {/* <!-- End --> */}

        </div>
      </div>
    </div>
  )
}

export default Login