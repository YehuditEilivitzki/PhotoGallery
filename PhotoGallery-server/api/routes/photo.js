
const express = require('express')
const router = express.Router()

const {
    getPhotoById,
    pagination,
    getPhotoByCategory,
    getStartData,
    sortPhotoById
} = require('../controllers/photo')
// navigation to functions in the controller
router.get('/getPhotoByCategory/:categoryName', getPhotoByCategory)
router.get('/getStartData', getStartData)
router.get('/pagination/:page', pagination)
router.get('/sortPhotoById', sortPhotoById)
router.get('/getPhotoById/:photoId', getPhotoById)


module.exports = router