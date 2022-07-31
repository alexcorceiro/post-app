const express = require("express");
const {getPost, getUpdate, getDelete, getUpdateLike, getById, getUser, getUsername} = require("../controller/LikeController");
const router = express.Router();

router.post('/', getPost);
router.put('/:id', getUpdate);
router.delete('/:id', getDelete);
router.put('/:id/like', getUpdateLike);
router.get('/:id', getById);
router.get('/timeline/:userId', getUser);
router.get('/profile/:username', getUsername);

module.exports= router;