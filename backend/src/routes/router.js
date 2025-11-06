import express from 'express'
const router = express.Router()

import provaRouter from './provaRouter'
import questionRouter from './'

router.use("/prova", provaRouter)
router.use("/question", questionRouter)
router.use("/alternative", alternativeRouter)


export default router