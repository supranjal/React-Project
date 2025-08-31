import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DataFetch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col">
          <div
            className="bg-white border rounded-2xl shadow-md hover:shadow-2xl transition duration-300 cursor-pointer overflow-hidden"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={product.thumbnail} // safer than images[0]
                alt={product.title}
                className="w-full h-56 object-cover transform hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h1 className="font-semibold text-lg mb-1 line-clamp-1">
                {product.title}
              </h1>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                {product.description}
              </p>
              <h2 className="text-xl font-bold text-blue-600">
                ${product.price}
              </h2>
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-green-600">Stock: {product.stock}</span>
                <span className="text-yellow-600">⭐ {product.rating}</span>
              </div>
            </div>
          </div>
          <Link to={`/product/${product.id}`} className="mt-2 text-blue-600 hover:underline text-center">View details</Link>
        </div>
      ))}
    </div>
  );
};

export default DataFetch;
