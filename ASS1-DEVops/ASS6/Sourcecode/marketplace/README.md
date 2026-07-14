# Used Vehicle Marketplace (Node.js + Express + MongoDB)

Simple e-commerce style portal for used vehicle sales (car, bike, scooter) using:
- Node.js
- Express.js
- MongoDB (NoSQL) with Mongoose
- HTML/CSS/Vanilla JS frontend

## Database Connection
This project is configured for your local MongoDB setup:
- Database: `ASS6`
- Collection (listings): `marketplace`
- Connection string: `mongodb://localhost:27017/ASS6`

## Features
- User registration and login (session-based auth)
- Add vehicle listings (car/bike/scooter/other)
- Home page with all listings
- Detailed listing page
- Delete your own listing
- MongoDB integration using Mongoose schema

## Listing Fields
Each listing stores:
- `title`
- `category`
- `brand`
- `model`
- `year`
- `kilometersDriven`
- `fuelType`
- `location`
- `price`
- `description`
- `imageUrl`
- Seller info (`userId`, `username`)

## Run Locally
1. Open terminal in `marketplace`
2. Install dependencies:
   `npm install`
3. Seed sample data:
   `npm run seed`
4. Start app:
   `npm start`
5. Open:
   `http://localhost:4000`

## Test Credentials
After seeding:
- `john@example.com` / `password123`
- `jane@example.com` / `password123`
- `tech@example.com` / `password123`

## API Endpoints
### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/logout`
- `GET /api/auth/check`

### Listings
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products` (auth required)
- `DELETE /api/products/:id` (owner only)

## Notes
- Session secret can be changed in `.env`.
- If MongoDB is not running, start MongoDB Compass service/server first.
