import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 mt-5">
      <div className="container">
        <div className="row">

          <div className="col-md-3 mb-4">
            <h5 className="text-white fw-bold fs-4">My Shop</h5>
            <p>We provide the best quality products at affordable prices.<br /> Your satisfaction is our priority!!!</p>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="about-us" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="contact-us" className="text-white text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-white text-decoration-none">FAQs</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-">
            <h6 className="fw-bold">Main Categories</h6>
            <ul className="list-unstyled">
              <li><a href="/homedecor" className="text-white text-decoration-none">Home & Decor</a></li>
              <li><a href="/makeup" className="text-white text-decoration-none">Makeup & Skincare</a></li>
              <li><a href="/gadgets" className="text-white text-decoration-none">Gadgets</a></li>
              <li><a href="/fashion" className="text-white text-decoration-none">Fashion</a></li>
              <li><a href="groceries" className="text-white text-decoration-none">Groceries</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Contact</h6>
            <p>📍 Chitwan, Nepal</p>
            <p>📞 05655565</p>
            <p>📧 sales@myshop.com</p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="text-center border-top pt-3" style={{ fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} My Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
