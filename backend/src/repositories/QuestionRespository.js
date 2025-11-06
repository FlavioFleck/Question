export default class QuestionRespository {
    constructor(connection) {
        this.connection = connection
    }

    async add(question){
        const query = "INSERT INTO question(provaId, ordem, question, imagens) VALUES (?, ?, ?, ?)"
        const [info] = this.connection.query(query, [
            question.provaId,
            question.ordem,
            question.question,
            question.imagens
        ])

        return info.insertId
    }
    async delete(){}
    async update(){}
    async get(){}
    async getAll(){}
}