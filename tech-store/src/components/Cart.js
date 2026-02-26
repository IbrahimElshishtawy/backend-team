import { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // ممكن نجيب من backend لو عندك API للـ cart
    fetch("/api/cart")
      .then((res) => res.json())
      .then((data) => setCartItems(data.cart || []));
  }, []);

  return (
    <div className="cart">
      <h2>السلة</h2>
      {cartItems.length === 0 ? (
        <p>السلة فارغة</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            {item.name} - {item.price} EGP
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;