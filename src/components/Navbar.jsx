import React, { useContext } from 'react';
import productContext from '../context/ProductContext';
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Navbar = (props) => {
  const context = useContext(productContext);
  const {
    state: { cart },
  } = context;

  return (
    <>
      {/* Top Header */}
      <nav className="navbar navbar-expand-md navbar-dark" style={{ backgroundColor: 'purple' }}>
        <div className="container-fluid px-4">
          <Link className="navbar-brand text-white fw-bold fs-4" to="/">My Shop</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="topNav">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item"><Link className="nav-link text-white" to="/">HOME</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/sale">SALE</Link></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">
                  CATEGORIES
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/homedecor">Home & Decor</Link></li>
                  <li><Link className="dropdown-item" to="/makeup">Makeup & Skincare</Link></li>
                  <li><Link className="dropdown-item" to="/gadgets">Gadgets</Link></li>
                  <li><Link className="dropdown-item" to="/fashion">Fashion</Link></li>
                  <li><Link className="dropdown-item" to="/groceries">Groceries</Link></li>
                </ul>
              </li>
              <li className="nav-item"><Link className="nav-link text-white" to="/about-us">ABOUT</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/contact-us">CONTACT</Link></li>
            </ul>

            <div className="d-none d-md-flex flex-column text-white text-end" style={{ fontSize: '0.8rem' }}>
              <span>📞 05655565</span>
              <span>📧 sales@myshop.com</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Second Layer */}
      <div className="py-2 px-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2" style={{ backgroundColor: '#BDB5D5' }}>
        <div className="d-flex flex-grow-1 gap-2">
          <button
            onClick={props.toggleMode}
            className="btn btn-outline-success toggle-button"
          >
            {props.text}
          </button>

          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search ..." />
            <button className="btn btn-dark">🔍</button>
          </div>
        </div>

        <div className="d-flex gap-3 text-nowrap align-items-center">
          {/* Cart */}
          <Link to="/cart-items">
            <button type="button" className="btn btn-primary position-relative mx-2">
              <FaShoppingCart />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
              </span>
            </button>
          </Link>

          {/* Sign In */}
          <Link to="/signin" className="btn btn-outline-light">
            <FaUser /> Sign In
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
