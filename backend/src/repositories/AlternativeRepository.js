export default class AlternativeRespository {
    constructor(connection) {
        this.connection = connection
    }

    async add(alternative){ 
        const query = "INSERT INTO alternatives(questionId, description, correct) VALUES (?, ?, ?)"
        const [info] = await this.connection.query(query, [
            alternative.questionId,
            alternative.description,
            alternative.correct
        ])

        return info.insertId
    }

    async delete(id) {
        const query = "DELETE FROM alternatives WHERE id = ?"
        const [info] = await this.connection.query(query, [id])
        return info.affectedRows
    }

    async update(id, alternativeAlt) {
        const query = "UPDATE provas SET description = ?, correct = ? WHERE id = ?"
        const [info] = await this.connection.query(query, [
            alternativeAlt.description,
            alternativeAlt.correct,
            id,
        ])
        return info.affectedRows
    }
    async getById(id) {
        const query = "SELECT * FROM alternatives WHERE id = ?"
        const [info] = awaitthis.connection.query(query, [id])
        return info[0]
    }
    async getAll(){
        const query = "SELECT * FROM alternatives"
        const [info] = await this.connection.query(query)

        return info
    }
}