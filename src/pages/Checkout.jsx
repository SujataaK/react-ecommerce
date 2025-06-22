import React, { useContext, useState } from "react";
import productContext from "../context/ProductContext";

const Checkout = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(productContext);

  const total = cart.reduce((acc, item) => acc + Number(item.price), 0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.address || !formData.phone) {
      alert("Please fill out all fields.");
      return;
    }

    alert("🎉 Order placed successfully!");
    // Optionally clear cart
    cart.forEach((item) => {
      dispatch({ type: "REMOVE_FROM_CART", payload: item });
    });
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Checkout</h2>

      <div className="row">
        {/* Order Summary */}
        <div className="col-md-6 mb-4">
          <h4>🛍️ Order Summary</h4>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item._id} className="d-flex align-items-center mb-3 border-bottom pb-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "80px", height: "80px", objectFit: "cover", marginRight: "10px" }}
                  />
                  <div>
                    <h6 className="mb-0">{item.title}</h6>
                    <small className="text-muted">Rs {item.price}</small>
                  </div>
                </div>
              ))}
              <h5 className="mt-3">Total: Rs {total}</h5>
            </>
          )}
        </div>

        {/* Shipping Details */}
        <div className="col-md-6">
          <h4>🚚 Shipping Details</h4>
          <form onSubmit={handleCheckout}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" name="name" onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="text" className="form-control" name="phone" onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Shipping Address</label>
              <textarea className="form-control" name="address" rows="3" onChange={handleChange} required />
            </div>

            <button type="submit" className="btn btn-success w-100">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
