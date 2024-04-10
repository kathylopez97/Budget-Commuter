const router = require('express').Router();

const {
    createUser,
    getSingleUser,
    favoriteVehicle,
    deleteFavorite,
    login,
} = require('../../controllers/user-controllers');

const { authMiddleware } = require('../../utils/auth');

//still needs to be filled in / changed. This is more placeholder code.