import React from "react";

const ProductCard = ({ name, price, image, inStock }) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <img src={image} alt={name} style={{ width: "100%", height: "200px" }} />
      <h3>{name}</h3>
      <p style={{ fontSize: "20px", color: "blue" }}>{price}</p>
      {inStock ? (
        <button
          style={{
            padding: "10px",
            backgroundColor: "green",
            color: "white",
          }}
        >
          Add to Cart
        </button>
      ) : (
        <button disabled style={{ borderColor: "gray" }}>
          Out of Stock
        </button>
      )}
    </div>
  );
};

export default ProductCard;
