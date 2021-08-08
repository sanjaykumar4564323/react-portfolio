import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-light text-muted spacing color">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom color">
          <div className="me-5 d-none d-lg-block"></div>

         
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Singh Services Inc
                </h6>
                <h6>
                  Singh Services Inc. was started by Jazzy Singh, and is amied
                  towards getting Their Customers in their Dream Homes.
                </h6>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Social</h6>
                <h6>
                  <a
                    href="https://www.facebook.com/jazzysinghrealtor/"
                    target="blank"
                    className="text-reset">
                    Facebook
                  </a>
                </h6>
                <h6>
                  <a
                    href="https://www.instagram.com/jazzysinghrealtor/?hl=en"
                    target="blank"
                    className="text-reset">
                    Instagram
                  </a>
                </h6>
                <h6>
                  <a
                    href="https://twitter.com/jazzysrealtor?lang=en"
                    target="blank"
                    className="text-reset">
                    Twitter
                  </a>
                </h6>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <h6>
                  <Link to="/search" className="text-reset">
                    Search
                  </Link>
                </h6>
                <h6>
                  <Link to="/testimonial" className="text-reset">
                    Testimonials
                  </Link>
                </h6>
                <h6>
                  <a
                    href="https://jazzysingh.cbintouch.com"
                    target="blank"
                    className="text-reset">
                    Sales
                  </a>
                </h6>
                <h6>
                  <Link to="/contact" className="text-reset">
                    Help
                  </Link>
                </h6>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <h6>
                  <i className="fas fa-home me-3"></i> 405 Colemans Crossing;
                  Marysville, OH
                </h6>
                <h6>
                  <i className="fas fa-envelope me-3"></i>
                  jazzysingh@cbrealty.com
                </h6>
                <h6>
                  <i className="fas fa-phone me-3"></i> + 614 535 7890
                </h6>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            Jazzy Singh
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
