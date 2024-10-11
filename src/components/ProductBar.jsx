import React, {memo} from 'react';

const ProductBar = memo(({ data}) => {
  // Find the product that matches the provided id
  const idProvided = Math.floor(Math.random() * 10) + 1;
  const product = data.find((item) => item.id === idProvided.toString());
  console.log(data)

  // If no product matches the id, show a message
  if (!product) {
    return (
      <div className="bg-sky-100 min-h-screen flex flex-col items-center py-10">
        <h1 className="text-2xl font-semibold text-sky-600">No product found for the provided ID.</h1>
      </div>
    );
  }

  return (
      <div className="w-full max-w-3xl space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-sky-800">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-sky-600 mt-1">Rating: {product.rating} / 5</p>
          </div>
          <div className="text-sky-800 font-semibold text-lg">
            ${product.price.toFixed(2)}
          </div>
        </div>
      </div>
  );
});

export default ProductBar;