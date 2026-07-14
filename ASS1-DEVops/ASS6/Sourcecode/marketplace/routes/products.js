const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { requireAuth } = require('../middleware/auth');

// GET /api/products - Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find()
      .populate('userId', 'username email')
      .sort({ createdAt: -1 });

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// GET /api/products/:id - Get single product by ID
router.get('/:id', async (req, res) => {
  try {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: 'Invalid product ID format' });
    }

    const product = await Product.findById(req.params.id)
      .populate('userId', 'username email');

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// POST /api/products - Create new product (auth required)
router.post('/', requireAuth, async (req, res) => {
  const {
    title,
    category,
    brand,
    model,
    year,
    kilometersDriven,
    location,
    fuelType,
    price,
    description,
    imageUrl
  } = req.body;

  try {
    // Validation
    if (!title || !category || !brand || !model || !location || !price || !description || !imageUrl) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (isNaN(price) || price <= 0) {
      return res.status(400).json({ error: 'Price must be a positive number' });
    }

    if (year && (isNaN(year) || Number(year) < 1980 || Number(year) > 2100)) {
      return res.status(400).json({ error: 'Year must be between 1980 and 2100' });
    }

    if (kilometersDriven && (isNaN(kilometersDriven) || Number(kilometersDriven) < 0)) {
      return res.status(400).json({ error: 'Kilometers driven must be 0 or more' });
    }

    // Create new product
    const product = new Product({
      title,
      category,
      brand,
      model,
      year: year ? Number(year) : undefined,
      kilometersDriven: kilometersDriven ? Number(kilometersDriven) : undefined,
      location,
      fuelType: fuelType || '',
      price: parseFloat(price),
      description,
      imageUrl,
      userId: req.userId,
      username: req.username
    });

    await product.save();

    res.status(201).json({
      message: 'Product added successfully',
      product
    });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Failed to add product' });
  }
});

// DELETE /api/products/:id - Delete product (auth required, owner only)
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Check if user is the owner
    if (product.userId.toString() !== req.userId.toString()) {
      return res.status(403).json({ error: 'You can only delete your own products' });
    }

    await Product.findByIdAndDelete(req.params.id);

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

module.exports = router;
