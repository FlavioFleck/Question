import express from 'express'
const router = express.Router()

import AlternativeController from '../controllers/AlternativeController.js'

const connection = 0;
const alternativeController = new AlternativeController(connection)

router.post("/create", alternativeController.createAlternative)
router.delete("/delete", alternativeController.deleteAlternative)
router.put("/update", alternativeController.updateAlternative)

export default router