import ProvaRepository from '../repositories/ProvaRespository.js'

export default class ProvaService {
    constructor(connection) {
        this.provaRepository = new ProvaRepository(connection)
    }

    async createProva(payload) {
    }
    async deleteProva() {}
    async updateProva() {}
}