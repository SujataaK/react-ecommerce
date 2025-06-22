import React, { useReducer, useState } from "react";
import ProductContext from "./ProductContext";
import { cartReducer } from "./Reducer";

const ProductState = ({ children }) => {
  const categorizedProducts = {
    groceries: [
      { _id: 1, title: "Apple", description: "Fresh Mustang Apple", price: 300, instock: 5, image: "/images/apple.jpg" },
      { _id: 2, title: "Banana", description: "Healthy Banana", price: 100, instock: 10, image: "/images/banana.jpg" },
      { _id: 2, title: "Banana", description: "Healthy Banana", price: 100, instock: 10, image: "/images/banana.jpg" },
      { _id: 2, title: "Kimchi", description: "cucumber kimchi", price: 100, instock: 10, image: "/images/kimchi.jpg" },
      { _id: 2, title: "Chia Seeds", description: "High quality chia seeds", price: 100, instock: 10, image: "/images/chia.jpg" },
      { _id: 2, title: "Biscuits", description: "Crunchy, tasty, healthy biscuits for breakfast", price: 100, instock: 10, image: "/images/biscuit.jpg" },
    ],
    gadgets: [
      { _id: 3, title: "Smartphone", description: "Latest Android Phone", price: 30000, instock: 3, image: "/images/smartphone.jpg" },
      { _id: 4, title: "Earbuds", description: "Noise cancelling", price: 2500, instock: 7, image: "/images/earbuds.jpg" },
      { _id: 3, title: "Smartphone", description: "Latest Android Phone", price: 30000, instock: 3, image: "/images/smartphone.jpg" },
      { _id: 4, title: "Earbuds", description: "Noise cancelling", price: 2500, instock: 7, image: "/images/earbuds.jpg" },
      { _id: 3, title: "Smartphone", description: "Latest Android Phone", price: 30000, instock: 3, image: "/images/smartphone.jpg" },
      { _id: 4, title: "Earbuds", description: "Noise cancelling", price: 2500, instock: 7, image: "/images/earbuds.jpg" },
      { _id: 3, title: "Smartphone", description: "Latest Android Phone", price: 30000, instock: 3, image: "/images/smartphone.jpg" },
    ],
    makeup: [
      { _id: 5, title: "Moisturizer", description: "Hydrating cream", price: 1200, instock: 10, image: "/images/mascara.jpg" },
      { _id: 6, title: "Face Wash", description: "Refreshing cleanser", price: 800, instock: 25, image: "/images/facewash.jpg" },
      { _id: 7, title: "Mascara", description: "Long lasting waterproof mascara", price: 800, instock: 12, image: "/images/mascara.jpg" },
      { _id: 8, title: "lipstick", description: "Hydrating Lipstick", price: 600, instock: 20, image: "/images/lipstick.jpg" },
    ],
    fashion: [
      { _id: 9, title: "T-Shirt", description: "Men’s Cotton T-shirt", price: 1000, instock: 10, image: "/images/tshirt.jpg" },
      { _id: 10, title: "Dress", description: "Women’s Summer Dress", price: 2500, instock: 5, image: "/images/dress.jpg" },
      { _id: 11, title: "Wide leg jeans", description: "Comfy jeans", price: 1400, instock: 10, image: "/images/jeans.jpg" },
      { _id: 12, title: "Skirt", description: "Floral skirt for summer", price: 800, instock: 6, image: "/images/skirt.jpg" },
      { _id: 13, title: "One Piece", description: "Padded One piece", price: 1500, instock: 9, image: "/images/onepiece.jpg" },
    ],
    sale: [
      { _id: 14, title: "Summer Hat", description: "Stylish sun hat", price: 500, instock: 15, image: "/images/skirt.jpg" },
      { _id: 15, title: "Wireless Mouse", description: "On sale - limited time!", price: 999, instock: 8 },
    ],
    homedecor: [
      { _id: 13, title: "Matress", description: "Washable fur mattress", price: 1500, instock: 9, image: "/images/matress.jpg" },
      { _id: 10, title: "Sofa", description: "Luxury Sofa set", price: 25000, instock: 5, image: "/images/sofa.jpg" },
      { _id: 11, title: "Money Plant", description: "Artificial money plant", price: 300, instock: 10, image: "/images/moneyp.jpg" },
      { _id: 12, title: "Bottle", description: "water bottle", price: 180, instock: 6, image: "/images/bottle.jpg" },
      { _id: 16, title: "Bedsheet", description: "Pinterest inspired bedsheet with two pillow cases", price: 1200, instock: 10, image: "/images/bedsheet.jpg" },
    ],
    
  };

  const [state, dispatch] = useReducer(cartReducer, {
    categories: categorizedProducts,
    cart: [],
  });


  return (
    <ProductContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
