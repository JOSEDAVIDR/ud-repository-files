const express = require('express')
const { OK } = require('http-status-codes')

const wrap = require('../wrap.js')
const { routers } = require('../constants')

const { generalController } = require('../controllers')

const router = express.Router()

router.get(routers.GENERAL, wrap(generalController.listGeneral))

router.post(routers.GENERAL, wrap(generalController.createGeneral))

router.put(routers.GENERAL, wrap(generalController.updateGeneral))

router.delete(routers.GENERAL, wrap(generalController.deleteGeneral))

router.get(routers.HEALTH, wrap(async (req, res) => {
    res.status(OK).json({ message: 'OK' })
  }))

module.exports = router