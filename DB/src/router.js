const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  registerUser,
  loginUser,
  getUserDetails,
  getAllProducts,
  addProduct, 
} = require('./controllers');
const auth = require(`./auth`);

router.post(`/register`, registerUser);
router.post(`/login`, loginUser);
router.get(`/me`, auth, getUserDetails);

router.get('/users', getAllUsers);

router.get('/products', getAllProducts);
router.post('/product', addProduct);


module.exports = router;
