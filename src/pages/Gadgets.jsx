import React, { useContext } from 'react'
import productContext from '../context/ProductContext';

const Gadgets = () => {
  const { state, dispatch } = useContext(productContext);
  const saleProducts = state.categories.gadgets;
  const { cart } = state;
  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Gadgets</h2>
      <div className="row">
        {saleProducts.map((item) => (
          <div key={item._id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p><strong>Price:</strong> Rs {item.price}</p>
                <div className="mt-auto">
                  {cart.some((p) => p._id === item._id) ? (
                    <button
                      onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}
                      className="btn btn-danger w-100"
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
                      className="btn btn-primary w-100"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gadgets
