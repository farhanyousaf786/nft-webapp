const express = require('express');
const router = express.Router();
const unlikesCtrl = require('../../controllers/unlikes')

router.post('/posts/:id/unlikes', unlikesCtrl.create)
router.delete('/unlikes/:id', unlikesCtrl.deleteunLike)

module.exports = router;