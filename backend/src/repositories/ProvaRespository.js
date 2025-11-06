export default class ProvaRespository {
    constructor(connection) {
        this.connection = connection
    }

    async add(prova) {
        const query = "INSERT INTO provas(userId, title) VALUES (?, ?)"
        const [info] = this.connection.query(query, [
            prova.userId,
            prova.title
        ])

        return info.insertId
    }

    async delete(id) {
        const query = "DELETE FROM provas WHERE id = ?"
        const [info] = this.connection.query(query, [id])
        return info.affectedRows
    }

    async update(id, provaAlt){
        const query = "UPDATE provas SET title = ? WHERE id = ?"
        const [info] = this.connection.query(query, [
            provaAlt.title,
            id
        ])
        return info.affectedRows
    }
    async get(){}
    async getAll(){}
}