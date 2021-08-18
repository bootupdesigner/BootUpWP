import React from "react";
import { HashLink } from 'react-router-hash-link';

import { Link } from "react-router-dom";

import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

      const Banner = () => {
        return (
          <div className="slide-container">
            <Fade>
              
              <div className="each-fade px-2">
                <div>
                  <span>
                    <h2 class="fw-bold">Speak with a Professional</h2>
                    <p class="col-md-8">We're ready to start plan yor web design, we just need a little more information about your goals before we get started.</p>
                    <button class="btn btn-primary btn-lg" type="button">
                      <Link to="/Contact">
                        Request a Consultation
                      </Link>
                    </button>
                  </span>
                </div>
              </div>
              <div className="each-fade px-2">
                <div>
                  <span>
                    <h2 class="fw-bold">Start Planning your Website</h2>
                    <p class="col-md-8">We're here to make your website pop and attract more clients everyday. Here are some basic features we offer.</p>
                    <HashLink to="/#websitedesigns">
                      <button class="btn btn-primary btn-lg" type="button">learn more about your Website Design</button>
                      </HashLink>
                  </span>
                </div>
              </div>
            </Fade>
          </div>
      //   <div class="carousel slide p-5 mb-4 bg-light rounded-3" data-bs-ride="carousel">
      //     <div class="carousel-inner container-fluid py-5">
      //       <div class="carousel-item active">
      //         <h2 class="display-5 fw-bold">Website Development</h2>
      //         <p class="col-md-8 fs-4">Experienced in front-end and back-end web development, we develop beautiful, functional web apps for B2B and B2C purposes.</p>
      //         <button class="btn btn-primary btn-lg" type="button">View Our Portfolio</button>
      //       </div>
      //       <div class="carousel-item">
      //         <h2 class="display-5 fw-bold">Speak with a Professional</h2>
      //         <p class="col-md-8 fs-4">We're ready to start plan yor web design, we just need a little more information about your goals before we get started.</p>
      //         <button class="btn btn-primary btn-lg" type="button">Request a Quote</button>
      //       </div>
      //       <div class="carousel-item">
      //         <h2 class="display-5 fw-bold">Start Planning your Website</h2>
      //         <p class="col-md-8 fs-4">We're here to make your website pop and attract more clients everyday. Here are some basic features we offer.</p>
      //         <button class="btn btn-primary btn-lg" type="button">learn more about your Website Design</button>
      //       </div>
      //   </div>
      // </div>
    );
};

export default Banner;