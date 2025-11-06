export default class ProvaRespository {
    constructor(connection) {
        this.connection = connection
    }

    async add(prova){
        const query = "INSERT INTO provas(userId, title) VALUES (?, ?)"
        const [info] = this.connection.query(query, [
            prova.userId,
            prova.title
        ])

        return info.insertId
    }
    async delete(){}
    async update(){}
    async get(){}
    async getAll(){}
}