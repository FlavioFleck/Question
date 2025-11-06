import express from 'express'
const router = express.Router()

import QuestionController from '../controllers/QuestionController.js'

const connection = 0;
const questionController = new QuestionController(connection)

router.post("/create", questionController.createQuestion)
router.delete("/delete", questionController.deleteQuestion)
router.put("/update", questionController.updateQuestion)

export default router