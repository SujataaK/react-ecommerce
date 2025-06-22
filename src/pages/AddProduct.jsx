import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    instock: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setProduct((prev) => ({ ...prev, image: files[0] }));
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(product).forEach(([key, value]) => {
      if (key === "image" && value) {
        formData.append("myfile", value); // match with backend
      } else {
        formData.append(key, value);
      }
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/api/product/addproduct",
        formData,
        {
          headers: {
            "auth-token": "2ertert3w4t4erwe",
          },
        }
      );

      console.log("Response:", response.data);
      setSuccessMsg("✅ Product added successfully!");
      setProduct({ title: "", description: "", price: "", instock: "", image: null });
      setPreview(null);
    } catch (error) {
      console.error("Error:", error);
      setSuccessMsg("❌ Failed to add product.");
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <div className="card shadow-sm">
        <div className="card-header text-white" style={{ backgroundColor: 'purple' }}>
          <h4 className="mb-0">Add New Product</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                name="title"
                value={product.title}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                value={product.description}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Price (Rs)</label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Stock Quantity</label>
              <input
                type="number"
                name="instock"
                value={product.instock}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Product Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="form-control"
              />
              {preview && (
                <div className="mt-2">
                  <img
                    src={preview}
                    alt="Preview"
                    style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "5px" }}
                  />
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-success w-100">
              Submit Product
            </button>
          </form>

          {successMsg && (
            <div className="alert alert-info mt-3" role="alert">
              {successMsg}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
