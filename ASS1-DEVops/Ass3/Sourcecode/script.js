let cart = [];
let total = 0;

// Show login page on load
showSection("login");

function showSection(id) {
  document.querySelectorAll("section").forEach(s => s.style.display = "none");
  const section = document.getElementById(id);
  section.style.display = "block";
  // Trigger animation
  section.style.animation = "none";
  setTimeout(() => {
    section.style.animation = "fadeInUp 0.6s ease-out";
  }, 10);
}

// LOGIN
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "Yash" && pass === "1234") {
    document.getElementById("loginMsg").innerText = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    showSection("home");
  } else {
    document.getElementById("loginMsg").innerText = "Invalid credentials";
    document.getElementById("loginMsg").style.color = "#ff6b6b";
  }
}

// ADD TO CART
function addToCart(item, price) {
  cart.push({ item, price });
  
  // Show success animation
  const btn = event.target;
  const originalText = btn.innerText;
  btn.innerText = "Added!";
  btn.style.background = "linear-gradient(135deg, #51cf66, #40c057)";
  
  setTimeout(() => {
    btn.innerText = originalText;
    btn.style.background = "linear-gradient(135deg, #4da3ff, #2e7dd4)";
  }, 1500);
}

// SHOW CART
function showCart() {
  showSection("cart");
  let list = document.getElementById("cartItems");
  list.innerHTML = "";
  total = 0;

  if (cart.length === 0) {
    list.innerHTML = "<li style='text-align: center; color: #94a3b8;'>Your cart is empty</li>";
    document.getElementById("totalPrice").innerText = "Total: ₹0";
    return;
  }

  cart.forEach((p, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span>${p.item} - ₹${p.price.toLocaleString('en-IN')}</span>
        <button onclick="removeFromCart(${index})" style="padding: 8px 12px; font-size: 12px; background: #ff6b6b;">Remove</button>
      </div>
    `;
    list.appendChild(li);
    total += p.price;
  });

  document.getElementById("totalPrice").innerText = "Total: ₹" + total.toLocaleString('en-IN');
}

// REMOVE FROM CART
function removeFromCart(index) {
  cart.splice(index, 1);
  showCart();
}

// CHECKOUT
function checkout() {
  showSection("checkout");
}

// FINAL BILL
function placeOrder() {
  const name = document.getElementById("checkoutName").value;
  const address = document.getElementById("checkoutAddress").value;
  
  if (!name || !address) {
    alert("Please fill in all details");
    return;
  }
  
  showSection("bill");
  document.getElementById("billAmount").innerHTML = `
    <strong style="font-size: 24px; color: #7dd3fc;">Order Total: ₹${total.toLocaleString('en-IN')}</strong>
    <div style="margin-top: 20px; text-align: left; background: rgba(77, 163, 255, 0.1); padding: 20px; border-radius: 10px;">
      <p><strong>Name:</strong> ${name}</p>
      <p style="margin-top: 10px;"><strong>Address:</strong> ${address}</p>
      <p style="margin-top: 10px;"><strong>Items:</strong> ${cart.length} product(s)</p>
    </div>
  `;
  
  // Reset checkout form
  document.getElementById("checkoutName").value = "";
  document.getElementById("checkoutAddress").value = "";
  cart = [];
}
