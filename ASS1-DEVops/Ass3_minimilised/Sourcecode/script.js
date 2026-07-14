let cart = [], total = 0;
const products = [['Laptop', 50678, 'Laptop.png'], ['Headphones', 2786, 'headphone.png'], ['Mobile', 37686, 'iphone.png']];
const $ = id => document.getElementById(id);

show('login');
$('prods').innerHTML = products.map((p, i) => 
  `<div><img src="${p[2]}"><br><b>${p[0]}</b> - ₹${p[1]} <button onclick="add(${i})">Add</button></div>`
).join('');

function show(id) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
  if(id === 'cart') displayCart();
}

function login() {
  if($('u').value === 'Yash' && $('p').value === '1234') {
    $('u').value = '';
    $('p').value = '';
    show('home');
  } else {
    $('msg').innerText = 'Invalid';
  }
}

function add(i) {
  cart.push(products[i]);
  updateCartBadge();
  alert(products[i][0] + ' added');
}

function updateCartBadge() {
  $('badge').innerText = cart.length > 0 ? cart.length : '';
}

function remove(i) {
  cart.splice(i, 1);
  updateCartBadge();
  displayCart();
}

function displayCart() {
  $('count').innerText = cart.length;
  $('items').innerHTML = cart.map((p, i) => 
    `<li>${p[0]} - ₹${p[1]} <button onclick="remove(${i})">Remove</button></li>`
  ).join('');
  total = cart.reduce((s, p) => s + p[1], 0);
  $('total').innerText = cart.length ? 'Total: ₹' + total : 'Cart empty';
}

function order() {
  let n = $('name').value, a = $('addr').value;
  if(!n || !a || !cart.length) return alert('Fill all fields');
  $('bill').innerHTML = `<b>Name:</b> ${n}<br><b>Address:</b> ${a}<br><b>Total:</b> ₹${total}<br><b>Items:</b> ${cart.length}`;
  $('name').value = '';
  $('addr').value = '';
  cart = [];
  updateCartBadge();
  show('bill');
}
