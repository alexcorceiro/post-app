const express = require("express");
const router = express.Router();
const {getUpdate, getDelete, getUsers, getUsersById, getLike, getLikeById} = require("../controller/LikeController");


router.put('/:id', getUpdate);
router.delete('/:id', getDelete);
router.get('/', getUsers);
router.get('/freinds/:userId', getUsersById);
router.put('/:id/fallow', getLike);
router.put('/:id/unfollow', getLikeById);

module.exports = router;