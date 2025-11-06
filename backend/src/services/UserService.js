import UserRepository from '../repositories/UserRespository.js'

export default class UserService {
    constructor(connection) {
        this.userRepository = new UserRepository(connection)
    }

    async createUser() {}
    async deleteUser() {}
    async updateUser() {}
}