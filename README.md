# MERN Boilerplate

## Instructions
- `cd server` and `npm i`
- `cd ../client` and `npm i`
- `npm start` - will start both client and server at the same time

- Client is running on http://localhost:3000
- Server is running on http://localhost:3001

# How this was setup

## Client
1. `npm i react-redux @reduxjs/toolkit dotenv react-router-dom concurrently `
2. Edit `package.json` to include `"proxy": "http://localhost:3001"` and `"start" : "concurrently \"react-scripts start\" \"cd ../server && nodemon index.js\""`
3. Edit `index.js`
4. Create `store` folder and add `authSlice.js`, `index.js`, and `store.js`
5. Create `components` folder

## Server
1. `npm i -g nodemon`
2. `npm i express body-parser bcrypt cors dotenv helmet morgan jsonwebtoken mongoose`
3. `npm init -y`
4. Edit `package.json` to include `"type": "module"` and `"start": "nodemon index.js"`
5. Add `index.js` and configure
6. Add `.env` and add `MONGO_URL`, `PORT`, and `JWT_SECRET`
7. Create `models` folder and add `User.js`
8. Create `middleware` folder and add `auth.js`
9. Create `controllers` folder and add `auth.js` and `users.js`
10. Create `routes` folder and add `auth.js` and `users.js`
11. Create `data` folder and add `index.js` - this is like `seed`