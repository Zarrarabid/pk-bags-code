import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./home.css";
import React from "react";
import Navbar from "../../container/Navbar";
import Header from "../../container/header/Header";
import Feature from "../../container/Featured Products/Feature";
// import imagebag1 from '../../images/arno-senoner-HFE2RyC76tw-unsplash.jpg'
// import imagebag2 from '../../images/arno-senoner-oCXVxwTFwqE-unsplash.jpg'
import Footer from '../../container/Footer/Footer' 

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

function Home() {
  const someProducts = [
    {
      image: "https://bootstrapious.com/i/snippets/sn-cart/product-1.jpg",
      Title: "Timex Unisex Originals",
      price: "$79.00",
      quantity: "3",
      action: "Remove",
    },
    {
      image: "https://bootstrapious.com/i/snippets/sn-cart/product-2.jpg",
      Title: "Lumix camera lense",
      price: "$9.00",
      quantity: "5",
      action: "Remove",
    },
    {
      image: "https://bootstrapious.com/i/snippets/sn-cart/product-3.jpg",
      Title: "Gray Nike running shoe",
      price: "$39.00",
      quantity: "2",
      action: "Remove",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header />
      <Feature />
      <div class="px-4 shadow">
        <div class="pb-5">
          <div class="">
            <div class="row">
              <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                {/* <!-- Shopping cart table --> */}
                <TableContainer class="table-responsive">
                  <Table class="table">
                    <TableRow>
                      <TableCell>Product</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Remove</TableCell>
                    </TableRow>
                    <TableBody>
                      {someProducts.map((item, index) => {
                        return (
                          <TableRow>
                            <TableCell>
                              <div class="p-2">
                                <img
                                  src={item.image}
                                  alt=""
                                  width="70"
                                  class="img-fluid rounded shadow-sm"
                                />
                                <div class="ml-3 d-inline-block align-middle">
                                  <h5 class="mb-0 ps-2">{item.Title}</h5>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{item.price}</TableCell>
                            <TableCell width={20} align="center" className="">
                              {item.quantity}
                            </TableCell>
                            <TableCell>
                              <button className="btn btn-danger">
                                {item.action}
                              </button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
                {/* <!-- End --> */}
              </div>
            </div>

            <div class="row py-5 p-4 bg-white rounded shadow-sm">
              <div class="col-lg-6">
                <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                  Coupon code
                </div>
                <div class="p-4">
                  <p class="font-italic mb-4">
                    If you have a coupon code, please enter it in the box below
                  </p>
                  <div class="input-group mb-4 border rounded-pill p-2">
                    <input
                      type="text"
                      placeholder="Apply coupon"
                      aria-describedby="button-addon3"
                      class="form-control border-0"
                    />
                    <div class="input-group-append border-0">
                      <button
                        id="button-addon3"
                        type="button"
                        class="btn btn-dark px-4 rounded-pill"
                      >
                        <i class="fa fa-gift mr-2"></i>Apply coupon
                      </button>
                    </div>
                  </div>
                </div>
                <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                  Instructions for seller
                </div>
                <div class="p-4">
                  <p class="font-italic mb-4">
                    If you have some information for the seller you can leave
                    them in the box below
                  </p>
                  <textarea
                    name=""
                    cols="30"
                    rows="2"
                    class="form-control"
                  ></textarea>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                  Order summary{" "}
                </div>
                <div class="p-4">
                  <p class="font-italic mb-4">
                    Shipping and additional costs are calculated based on values
                    you have entered.
                  </p>
                  <ul class="list-unstyled mb-4">
                    <li class="d-flex justify-content-between py-3 border-bottom">
                      <strong class="text-muted">Order Subtotal </strong>
                      <strong>$390.00</strong>
                    </li>
                    <li class="d-flex justify-content-between py-3 border-bottom">
                      <strong class="text-muted">Shipping and handling</strong>
                      <strong>$10.00</strong>
                    </li>
                    <li class="d-flex justify-content-between py-3 border-bottom">
                      <strong class="text-muted">Tax</strong>
                      <strong>$0.00</strong>
                    </li>
                    <li class="d-flex justify-content-between py-3 border-bottom">
                      <strong class="text-muted">Total</strong>
                      <h5 class="font-weight-bold">$400.00</h5>
                    </li>
                  </ul>
                  <a 
                    class="btn btn-dark rounded-pill py-2 btn-block"
                  >
                    Procceed to checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>

      </div>
    </div>
  );
}

export default Home;
