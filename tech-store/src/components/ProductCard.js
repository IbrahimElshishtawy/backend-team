function ProductCard({ product }) {
  const addToCart = () => {
    fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data => console.log("Cart updated:", data.cart));
  };

  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>{product.price} EGP</p>
      <button onClick={addToCart}>شراء</button>
    </div>
  );
}

export default ProductCard;