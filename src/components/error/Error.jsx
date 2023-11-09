
import 'bootstrap/dist/css/bootstrap.min.css';
import "./error.css";

import React from "react";

import { Link } from "react-router-dom";
import Modal from '@mui/material/Modal';
import Footer from '../../container/Footer/Footer'
function Error() {
  return (
    <div>


      <section className="page_404">
        <div className="container-fluid">
          <div className=" row">
            <div className=" col-sm-12 ">
              <div className=" text-center">
                <div className="container-fluid col-sm-10 col-sm-offset-1 four_zero_four_bg ">
                  <h1 className="text-center text-danger">404</h1>
                </div>

                <div className="contant_box_404 mt-2">
                  <h3 className="h2">Look like you're lost</h3>

                  <p>the page you are looking for not avaible!</p>

                  <Link to="/" className="btn btn-danger">
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Error;
