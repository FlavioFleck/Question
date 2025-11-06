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

    async delete(id) {
        const query = "DELETE FROM alternatives WHERE id = ?"
        const [info] = this.connection.query(query, [id])
        return info.affectedRows
    }

    async update(id, alternativeAlt) {
        const query = "UPDATE provas SET description = ?, correct = ? WHERE id = ?"
        const [info] = this.connection.query(query, [
            alternativeAlt.description,
            alternativeAlt.correct,
            id,
        ])
        return info.affectedRows
    }
    async get(){}
    async getAll(){}
}