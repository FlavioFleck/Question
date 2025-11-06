export default class QuestionRespository {
    constructor(connection) {
        this.connection = connection
    }

    async add(question){
        const query = "INSERT INTO questions(provaId, ordem, question, imagens) VALUES (?, ?, ?, ?)"
        const [info] = this.connection.query(query, [
            question.provaId,
            question.ordem,
            question.question,
            question.imagens
        ])

        return info.insertId
    }

    async delete(id) {
        const query = "DELETE FROM questions WHERE id = ?"
        const [info] = this.connection.query(query, [id])
        return info.affectedRows
    }

    async update(id, questionAlt){
        const query = "UPDATE provas SET ordem = ?, imagens = ? WHERE id = ?"
        const [info] = this.connection.query(query, [
            questionAlt.ordem,
            questionAlt.imagens,
            id
        ])
        return info.affectedRows
    }

    async get(){}
    async getAll(){}
}