import React, { useContext } from "react";
import productContext from "../context/ProductContext";
import { Link } from "react-router-dom";


const CartItems = () => {
  const { state: { cart }, dispatch } = useContext(productContext);

  const total = cart.reduce((acc, item) => acc + Number(item.price), 0);

  return (
    <div className="container py-4">
      <h2 className="mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <h5>Your cart is empty.</h5>
      ) : (
        <>
          <div className="row">
            {cart.map((item) => (
              <div key={item._id} className="col-md-4 mb-4">
                <div className="card shadow h-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top"
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text fw-bold">Price: Rs {item.price}</p>

                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        });
                      }}
                    >
                      Remove from Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-end mt-4">
            <h4>Total: Rs {total}</h4>
            <Link to="/checkout" className="btn btn-warning mt-3">Proceed to Checkout</Link>

          </div>
        </>
      )}
    </div>
  );
};

export default CartItems;
