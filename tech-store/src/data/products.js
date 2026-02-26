useEffect(() => {
  fetch("/api/products") // ده هيجيب المنتجات من backend
    .then(res => res.json())
    .then(data => setProducts(data));
}, []); 