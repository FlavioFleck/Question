import AlternativeRepository from '../repositories/ALternativeRespository.js'

export default class ProvaService {
    constructor(connection) {
        this.alternativeRepository = new AlternativeRepository(connection)
    }

    async createAlternative() {}
    async deleteAlternative() {}
    async updateAlternative() {}
}