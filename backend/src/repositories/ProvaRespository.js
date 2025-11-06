export default class ProvaRespository {
    constructor(connection) {
        this.connection = connection
    }

    async add(prova) {
        const query = "INSERT INTO provas(userId, title) VALUES (?, ?)"
        const [info] = await this.connection.query(query, [
            prova.userId,
            prova.title
        ])

        return info.insertId
    }

    async delete(id) {
        const query = "DELETE FROM provas WHERE id = ?"
        const [info] = await this.connection.query(query, [id])
        return info.affectedRows
    }

    async update(id, provaAlt){
        const query = "UPDATE provas SET title = ? WHERE id = ?"
        const [info] = await this.connection.query(query, [
            provaAlt.title,
            id
        ])
        return info.affectedRows
    }
    async getById(id) {
        const query = "SELECT * FROM provas WHERE id = ?"
        const [info] = await this.connection.query(query, [id])
        return info[0]
    }
    async getAll(){
        const query = "SELECT * FROM provas"
        const [info] = await this.connection.query(query)

        return info
    }
}