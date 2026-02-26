const products = [
{ id:1, name:"Laptop Pro", price:15000, img:"https://via.placeholder.com/300" },
{ id:2, name:"Smart Watch", price:3500, img:"https://via.placeholder.com/300" },
{ id:3, name:"Headphones", price:2200, img:"https://via.placeholder.com/300" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let fav = JSON.parse(localStorage.getItem("fav")) || [];

function displayProducts(){
const list = document.getElementById("productList");
if(!list) return;

products.forEach(p=>{
list.innerHTML += `
<div class="card">
<img src="${p.img}">
<h3>${p.name}</h3>
<p>${p.price} EGP</p>
<button class="buy" onclick="addToCart(${p.id})">شراء</button>
<button class="fav" onclick="addToFav(${p.id})">مفضلة ❤</button>
</div>
`;
});
}

function addToCart(id){
cart.push(products.find(p=>p.id===id));
localStorage.setItem("cart", JSON.stringify(cart));
updateCart();
}

function addToFav(id){
fav.push(products.find(p=>p.id===id));
localStorage.setItem("fav", JSON.stringify(fav));
alert("تمت الإضافة للمفضلة");
}

function updateCart(){
document.getElementById("cartCount").innerText = cart.length;
}

function openCart(){
document.getElementById("cartModal")?.classList.add("active");
displayCart();
}

function closeCart(){
document.getElementById("cartModal")?.classList.remove("active");
}

function displayCart(){
const items = document.getElementById("cartItems");
if(!items) return;
items.innerHTML="";
cart.forEach(p=>{
items.innerHTML += `<p>${p.name} - ${p.price} EGP</p>`;
});
}

displayProducts();
updateCart();