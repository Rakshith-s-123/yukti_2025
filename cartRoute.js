const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const {createCart, deleteCartItem, updateCartItem}=require('../controller/cartCtrl')


router.get('/',createCart);

// DELETE /api/cart/:itemId
router.delete('/:itemId', deleteCartItem);

router.patch('/:itemId', updateCartItem);

module.exports= router;