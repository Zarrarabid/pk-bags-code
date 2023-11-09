import React from 'react'
import imagebag1 from "../../images/bag 1.jpg";
import imagebag2 from "../../images/bag 2.jpg";
import imagebag3 from "../../images/bag 3.avif";
import imagebag4 from "../../images/bag 4.avif";
import imagebag5 from "../../images/bag 5.jpg";
import imagebag6 from "../../images/bag 6.webp";
import imagebag7 from "../../images/bag 7.webp";
import imagebag8 from "../../images/bag 8.jpg";
import imagebag9 from "../../images/bag 9.jpg";
import imagebag10 from "../../images/bag 10.jpg";

function Feature() {
  return (
    <div class="main px-3 py-5">
    <header class="text-center mb-5">
      <h1 class="display-4 font-weight-bold">Featured Products</h1>
    </header>

    <div class="py-1">
      
      <div class="row">
        <div class="col-lg-6 mb-3 mb-lg-0">
          <div class="hover hover-1 text-white rounded">
            <img src={imagebag1} alt="" className="img-fluid" />
            <div class="hover-overlay"></div>
            <div class="hover-1-content px-5 py-4">
              <h3 class="hover-1-title text-uppercase font-weight-bold mb-0">
                {" "}
                <span class="font-weight-light">Image </span>Caption
              </h3>
              <p class="hover-1-description font-weight-light mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="hover hover-1 text-white rounded">
            <img src={imagebag2} className="img-fluid" alt="" />
            <div class="hover-overlay"></div>
            <div class="hover-1-content px-5 py-4">
              <h3 class="hover-1-title text-uppercase font-weight-bold mb-0">
                {" "}
                <span class="font-weight-light">Image </span>Caption
              </h3>
              <p class="hover-1-description font-weight-light mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-1">
      <div class="row">
        <div class="col-lg-6 mb-3 mb-lg-0">
          <div class="hover hover-2 text-white rounded">
            <img src={imagebag3} className="img-fluid" alt="" />
            <div class="hover-overlay"></div>
            <div class="hover-2-content px-5 py-4">
              <h3 class="hover-2-title text-uppercase font-weight-bold mb-0">
                {" "}
                <span class="font-weight-light">Image </span>Caption
              </h3>
              <p class="hover-2-description text-uppercase mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="hover hover-2 text-white rounded">
            <img src={imagebag4} className="img-fluid" alt="" />
            <div class="hover-overlay"></div>
            <div class="hover-2-content px-5 py-4">
              <h3 class="hover-2-title text-uppercase font-weight-bold mb-0">
                {" "}
                <span class="font-weight-light">Image </span>Caption
              </h3>
              <p class="hover-2-description text-uppercase mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-1">
     <div class="row">
        <div class="col-lg-6 mb-3 mb-lg-0">
          <div class="hover hover-3 text-white rounded">
            <img src={imagebag5} alt="" />
            <div class="hover-overlay"></div>
            <div class="hover-3-content px-5 py-4">
              <h3 class="hover-3-title text-uppercase font-weight-bold mb-1">
                <span class="font-weight-light">Image </span>Caption
              </h3>
              <p class="hover-3-description small text-uppercase mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="hover hover-3 text-white rounded">
            <img src={imagebag6} alt="" />
            <div class="hover-overlay"></div>
            <div class="hover-3-content px-5 py-4">
              <h3 class="hover-3-title text-uppercase font-weight-bold mb-1">
                <span class="font-weight-light">Image </span>Caption
              </h3>
              <p class="hover-3-description small text-uppercase mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-1">
      <div class="row">
        <div class="col-lg-6 mb-3 mb-lg-0">
          <div class="hover hover-4 text-white rounded">
            <img src={imagebag7} className="img-fluid" alt="" />
            <div class="hover-overlay"></div>
            <div class="hover-4-content">
              <h3 class="hover-4-title text-uppercase font-weight-bold mb-0">
                <span class="font-weight-light">Image </span>Caption
              </h3>
              <p class="hover-4-description text-uppercase mb-0 small">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                do eiusmod tempor incididunt
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="hover hover-4 text-white rounded">
            <img src={imagebag8} className="img-fluid" alt="" />
            <div class="hover-overlay"></div>
            <div class="hover-4-content">
              <h3 class="hover-4-title text-uppercase font-weight-bold mb-0">
                <span class="font-weight-light">Image </span>Caption
              </h3>
              <p class="hover-4-description text-uppercase mb-0 small">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                do eiusmod tempor incididunt
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-1">
      <div class="row">
        <div class="col-lg-6 mb-3 mb-lg-0">
          <div class="hover hover-5 text-white rounded">
            <img
              src={imagebag9}
              className="img-fluid"
              style={{ imageOrientation: "" }}
              alt=""
            />
            <div class="hover-overlay"></div>
            <div class="hover-5-content">
              <h3 class="hover-5-title text-uppercase font-weight-light mb-0">
                Image{" "}
                <strong class="font-weight-bold text-white">
                  Caption{" "}
                </strong>
                <span>Colorfull</span>
              </h3>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="hover hover-5 text-white rounded">
            <img src={imagebag10} className="img-fluid" alt="" />
            <div class="hover-overlay"></div>
            <div class="hover-5-content">
              <h3 class="hover-5-title text-uppercase font-weight-light mb-0">
                Image{" "}
                <strong class="font-weight-bold text-white">
                  Caption{" "}
                </strong>
                <span>Colorfull</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Feature