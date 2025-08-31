import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!product.id) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-xl font-semibold text-gray-600 animate-pulse">
          Loading product details...
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left Section - Images */}
      <div className="space-y-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-80 object-cover rounded-xl shadow-lg"
        />
        <div className="grid grid-cols-4 gap-3">
          {product.images?.slice(0, 4).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`preview-${index}`}
              className="h-20 w-full object-cover rounded-lg border hover:scale-105 transition duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Right Section - Product Info */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>

        <div className="flex items-center gap-4 mb-4">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price}
          </span>
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
            {product.discountPercentage}% Off
          </span>
        </div>

        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Brand:</span> {product.brand}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Category:</span> {product.category}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Stock:</span>{" "}
          {product.stock > 0 ? (
            <span className="text-green-600">In Stock ({product.stock})</span>
          ) : (
            <span className="text-red-600">Out of Stock</span>
          )}
        </p>
        <p className="text-gray-700 mb-6">
          <span className="font-semibold">Rating:</span> ⭐ {product.rating}
        </p>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
