const express = require('express');
const app = express();
let cart = [
    { id: 1, name: 'Item 1', price: 10.99, quantity: 2 },
    { id: 2, name: 'Item 2', price: 5.99, quantity: 1 },
    { id: 3, name: 'Item 3', price: 7.99, quantity: 3 },
  ]; 
  
  const createCart = async (req, res) => {
    res.json(cart);
  };
  
  const deleteCartItem = async (req, res) => {
    const itemId = parseInt(req.params.itemId);
    console.log('Deleting item with ID:', itemId);
    const index = cart.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      cart.splice(index, 1);
      console.log('Item deleted');
    } else {
      console.log('Item not found');
    }
    res.json(cart);
  };
  
  const updateCartItem = async (req, res) => {
    const itemId = parseInt(req.params.itemId);
    const quantity = req.body.quantity;
    console.log('Updating item with ID:', itemId, 'to quantity:', quantity);
    const index = cart.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      cart[index].quantity = quantity;
      console.log('Item updated');
    } else {
      console.log('Item not found');
    }
    res.json(cart);
  };
  
  module.exports = { createCart, deleteCartItem, updateCartItem };
  