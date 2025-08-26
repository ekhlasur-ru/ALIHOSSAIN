import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the products:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 480 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
    },
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-64 items-center justify-center text-red-500">
        Error loading products. Please try again later.
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        keyBoardControl={true}
        infinite={true}>
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <img
                className="h-[250px] w-full object-cover"
                src={product.image}
                alt={product.title}
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold">
                  {product.title.slice(0, 20)}
                </h3>
                <p className="mb-4 text-gray-500">${product.price}</p>
                <button className="rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 text-white shadow-md transition duration-300 hover:from-blue-600 hover:to-blue-800">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
