import QuestionRepository from '../repositories/ProvaRespository.js'

export default class QuestionService {
    constructor(connection) {
        this.questionRepository = new QuestionRepository(connection)
    }

    async createQuestion() {}
    async deleteQuestion() {}
    async updateQuestion() {}
}