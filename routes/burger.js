const express = require('express')
const router = express.Router();
const burgerRouter = require('../controllers/burgerController')

router.get('/', burgerRouter.index);

router.post('/', burgerRouter.create);

router.post('/:id/update', burgerRouter.update);

router.get('/:id/delete', burgerRouter.delete);

router.get('/:id', burgerRouter.getById);



module.exports = router;