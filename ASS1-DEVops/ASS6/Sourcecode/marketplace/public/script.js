let isUserLoggedIn = false;
let currentUser = null;

async function checkAuthStatus() {
  try {
    const response = await fetch('/api/auth/check');
    const data = await response.json();

    if (data.isAuthenticated) {
      isUserLoggedIn = true;
      currentUser = data.user;
      localStorage.setItem('userId', data.user.id);
      localStorage.setItem('username', data.user.username);
      updateAuthUI(true);
    } else {
      isUserLoggedIn = false;
      currentUser = null;
      localStorage.removeItem('userId');
      localStorage.removeItem('username');
      updateAuthUI(false);
    }
  } catch (error) {
    console.error('Error checking auth status:', error);
    isUserLoggedIn = false;
    updateAuthUI(false);
  }
}

function updateAuthUI(isLoggedIn) {
  const authNav = document.getElementById('authNav');
  const logoutNav = document.getElementById('logoutNav');
  const addProductNav = document.getElementById('addProductNav');

  if (isLoggedIn) {
    if (authNav) authNav.style.display = 'none';
    if (logoutNav) logoutNav.style.display = 'block';
    if (addProductNav) addProductNav.style.display = 'block';
  } else {
    if (authNav) authNav.style.display = 'block';
    if (logoutNav) logoutNav.style.display = 'none';
    if (addProductNav) addProductNav.style.display = 'none';
  }
}

async function logout(event) {
  event.preventDefault();

  try {
    const response = await fetch('/api/auth/logout');

    if (response.ok) {
      isUserLoggedIn = false;
      currentUser = null;
      localStorage.clear();
      window.location.href = '/';
    }
  } catch (error) {
    console.error('Logout error:', error);
    alert('Logout failed');
  }
}

async function loadProducts() {
  const productsGrid = document.getElementById('productsGrid');
  if (!productsGrid) return;

  try {
    const response = await fetch('/api/products');
    if (!response.ok) throw new Error('Failed to fetch products');

    const products = await response.json();
    productsGrid.innerHTML = '';

    if (products.length === 0) {
      productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No listings available yet. Be the first to add one!</p>';
      return;
    }

    products.forEach(product => {
      const productCard = createProductCard(product);
      productsGrid.appendChild(productCard);
    });
  } catch (error) {
    console.error('Error loading products:', error);
    productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: red;">Error loading listings. Please try again later.</p>';
  }
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.style.cursor = 'pointer';

  const sellerName = product.username || 'Unknown Seller';
  const vehicleName = [product.brand, product.model].filter(Boolean).join(' ');
  const yearText = product.year ? ` | ${escapeHtml(String(product.year))}` : '';
  const kmText = Number.isFinite(Number(product.kilometersDriven))
    ? `${Number(product.kilometersDriven).toLocaleString('en-IN')} km`
    : 'Km NA';
  const locationText = product.location ? escapeHtml(product.location) : 'Location NA';

  card.innerHTML = `
    <img src="${product.imageUrl}" alt="${escapeHtml(product.title)}" class="product-image" onerror="this.src='https://via.placeholder.com/250x200?text=No+Image'">
    <div class="product-content">
      <div class="product-title">${escapeHtml(product.title)}</div>
      <div class="product-price">INR ${Number(product.price || 0).toLocaleString('en-IN')}</div>
      <div class="product-seller">by ${escapeHtml(sellerName)}</div>
      <div class="product-meta-line">${escapeHtml(vehicleName || 'Vehicle Details')}${yearText}</div>
      <div class="product-meta-line">${kmText} | ${locationText}</div>
      <div class="product-description">${escapeHtml(product.description || '')}</div>
    </div>
  `;

  card.addEventListener('click', () => {
    window.location.href = `/product-detail.html?id=${product._id}`;
  });

  return card;
}

function escapeHtml(value) {
  const text = String(value ?? '');
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return text.replace(/[&<>"']/g, m => map[m]);
}

document.addEventListener('DOMContentLoaded', async () => {
  await checkAuthStatus();
  if (document.getElementById('productsGrid')) {
    loadProducts();
  }
});

window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});
