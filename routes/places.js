const express = require('express');
const router = express.Router();
const placeController = require('../controllers/placeController')

router.get('/', placeController.index);

router.post('/', placeController.create);

router.post('/:id/update', placeController.update);

router.get('/:id/delete', placeController.delete);

router.get('/:id', placeController.getById);

module.exports = router;