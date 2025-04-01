const express = require("express");
const { createUser, loginUserCtrl,logoutUserCtrl, getUserProfile, addAddress } = require('../controller/userCtrl');
const {getAllRestaurants}= require('../controller/ResCtrl')
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUserCtrl);
router.post('/logout', logoutUserCtrl);
router.get('/profile', getUserProfile); 
// router.post('/change-password', changeUserPassword);
router.post('/add-address', addAddress)

module.exports = router;
