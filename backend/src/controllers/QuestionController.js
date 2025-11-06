import QuestionService from "../services/QuestionService.js";

export default class QuestionController {
    constructor(connection) {
        this.questionService = new QuestionService(connection)
    }

    createQuestion = async (req, res) => {
    }

    deleteQuestion = async (req, res) => {
    }

    updateQuestion = async (req, res) => {
    }
}