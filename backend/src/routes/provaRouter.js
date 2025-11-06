import express from 'express'
const router = express.Router()

import ProvaController from '../controllers/ProvaController.js'

const connection = 0;
const provaController = new ProvaController(connection)

router.post("/create", provaController.createProva)
router.delete("/delete", provaController.deleteProva)
router.put("/update", provaController.updateProva)

export default router