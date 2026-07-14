const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcryptjs = require('bcryptjs');
const User = require('./models/User');
const Product = require('./models/Product');

// Load environment variables
dotenv.config();

// Sample users data
const sampleUsers = [
  {
    username: 'john_doe',
    email: 'john@example.com',
    password: 'password123'
  },
  {
    username: 'jane_smith',
    email: 'jane@example.com',
    password: 'password123'
  },
  {
    username: 'tech_lover',
    email: 'tech@example.com',
    password: 'password123'
  }
];

// Sample listings data (vehicle-focused)
const sampleProducts = [
  {
    title: 'Maruti Suzuki Swift VXI (2019)',
    category: 'car',
    brand: 'Maruti Suzuki',
    model: 'Swift VXI',
    year: 2019,
    kilometersDriven: 42000,
    location: 'Pune',
    fuelType: 'Petrol',
    price: 585000,
    description: 'Single-owner Swift in excellent condition with complete service records and insurance valid till next year.',
    imageUrl: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&h=500&fit=crop',
    username: 'john_doe'
  },
  {
    title: 'Hyundai i20 Asta Diesel (2018)',
    category: 'car',
    brand: 'Hyundai',
    model: 'i20 Asta',
    year: 2018,
    kilometersDriven: 67000,
    location: 'Mumbai',
    fuelType: 'Diesel',
    price: 530000,
    description: 'Top-end i20 with touchscreen infotainment, reverse camera, and smooth engine performance.',
    imageUrl: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=800&h=500&fit=crop',
    username: 'tech_lover'
  },
  {
    title: 'Honda City ZX CVT (2020)',
    category: 'car',
    brand: 'Honda',
    model: 'City ZX',
    year: 2020,
    kilometersDriven: 31000,
    location: 'Nashik',
    fuelType: 'Petrol',
    price: 1080000,
    description: 'Automatic Honda City with premium interior and excellent mileage. Fully maintained at authorized service center.',
    imageUrl: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800&h=500&fit=crop',
    username: 'jane_smith'
  },
  {
    title: 'Royal Enfield Classic 350 (2021)',
    category: 'bike',
    brand: 'Royal Enfield',
    model: 'Classic 350',
    year: 2021,
    kilometersDriven: 19000,
    location: 'Pune',
    fuelType: 'Petrol',
    price: 178000,
    description: 'Well-kept Classic 350 with new tyres and recent service completed. Great touring bike.',
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&h=500&fit=crop',
    username: 'tech_lover'
  },
  {
    title: 'Bajaj Pulsar NS200 (2022)',
    category: 'bike',
    brand: 'Bajaj',
    model: 'Pulsar NS200',
    year: 2022,
    kilometersDriven: 11000,
    location: 'Aurangabad',
    fuelType: 'Petrol',
    price: 142000,
    description: 'Sporty Pulsar in like-new condition. No accident history, all documents available.',
    imageUrl: 'https://images.unsplash.com/photo-1619771914272-e3f7b4fe4d6b?w=800&h=500&fit=crop',
    username: 'jane_smith'
  },
  {
    title: 'TVS Apache RTR 160 4V (2021)',
    category: 'bike',
    brand: 'TVS',
    model: 'Apache RTR 160 4V',
    year: 2021,
    kilometersDriven: 22000,
    location: 'Nagpur',
    fuelType: 'Petrol',
    price: 118000,
    description: 'Apache RTR with dual-disc variant, smooth pickup, and regular maintenance done on time.',
    imageUrl: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=500&fit=crop',
    username: 'john_doe'
  },
  {
    title: 'Yamaha FZ-S FI V3 (2020)',
    category: 'bike',
    brand: 'Yamaha',
    model: 'FZ-S FI V3',
    year: 2020,
    kilometersDriven: 26000,
    location: 'Satara',
    fuelType: 'Petrol',
    price: 98000,
    description: 'Reliable commuter bike with ABS, excellent mileage, and clean ownership history.',
    imageUrl: 'https://images.unsplash.com/photo-1622185135505-2d795003994a?w=800&h=500&fit=crop',
    username: 'tech_lover'
  },
  {
    title: 'Activa 6G (2023)',
    category: 'scooter',
    brand: 'Honda',
    model: 'Activa 6G',
    year: 2023,
    kilometersDriven: 7000,
    location: 'Kolhapur',
    fuelType: 'Petrol',
    price: 89000,
    description: 'Latest Activa model, very lightly used, perfect for city rides and daily commuting.',
    imageUrl: 'https://images.unsplash.com/photo-1576512928891-0d47d4bb15cd?w=800&h=500&fit=crop',
    username: 'jane_smith'
  },
  {
    title: 'Kia Seltos HTK+ (2021)',
    category: 'car',
    brand: 'Kia',
    model: 'Seltos HTK+',
    year: 2021,
    kilometersDriven: 28000,
    location: 'Pimpri-Chinchwad',
    fuelType: 'Diesel',
    price: 1325000,
    description: 'Stylish compact SUV with spacious cabin, smooth drive, and full service history.',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop',
    username: 'john_doe'
  },
  {
    title: 'Renault Kwid RXT (2017)',
    category: 'car',
    brand: 'Renault',
    model: 'Kwid RXT',
    year: 2017,
    kilometersDriven: 54000,
    location: 'Ahmednagar',
    fuelType: 'Petrol',
    price: 325000,
    description: 'Budget-friendly hatchback with good condition tyres and recently renewed insurance.',
    imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=500&fit=crop',
    username: 'jane_smith'
  }
];

// Seed the database
async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ASS6');
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Product.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Create users
    const createdUsers = [];
    for (const userdata of sampleUsers) {
      const user = new User(userdata);
      await user.save();
      createdUsers.push(user);
      console.log(`👤 Created user: ${user.username}`);
    }

    // Create products with user IDs
    for (const productData of sampleProducts) {
      const user = createdUsers.find(u => u.username === productData.username);
      const product = new Product({
        ...productData,
        userId: user._id
      });
      await product.save();
      console.log(`📦 Created product: ${product.title}`);
    }

    console.log('\n✨ Database seeding completed successfully!');
    console.log(`📊 Created ${createdUsers.length} users and ${sampleProducts.length} products`);
    console.log('\n📝 Test Credentials:');
    sampleUsers.forEach(user => {
      console.log(`   Email: ${user.email}, Password: ${user.password}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

// Run seeding
seedDatabase();
