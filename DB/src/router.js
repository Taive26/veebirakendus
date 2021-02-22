const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  registerUser,
  loginUser,
  getUserDetails,
  updateUser,
  getAllProducts,
  addProduct,
  updateProduct, 
  getOneProductByID,
  deleteOneProductByID,
} = require('./controllers');
const auth = require(`./auth`);

router.post(`/register`, registerUser);
router.post(`/login`, loginUser);
router.get(`/me`, auth, getUserDetails);

router.get('/users', getAllUsers);
router.patch('/user/:id', updateUser);

router.get('/products', getAllProducts);
router.post('/product', addProduct);
router.patch('/product/:id', updateProduct);


router.get('/product/:id', getOneProductByID);
router.delete('/product/:id', deleteOneProductByID);

module.exports = router;
