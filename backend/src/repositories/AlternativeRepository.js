export default class AlternativeRespository {
    constructor(connection) {
        this.connection = connection
    }

    async add(alternative){
        const query = "INSERT INTO alternatives(questionId, description, correct) VALUES (?, ?, ?)"
        const [info] = this.connection.query(query, [
            alternative.questionId,
            alternative.description,
            alternative.correct
        ])

        return info.insertId
    }
    async delete(){}
    async update(){}
    async get(){}
    async getAll(){}
}