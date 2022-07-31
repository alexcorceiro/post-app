const express = require("express");
const{getLogin, getRegister} = require('../controller/UserController');
const router = express.Router()


router.post('/register', getRegister);
router.post('/login', getLogin);



module.exports= router;