import UserService from "../services/UserService.js";

export default class UserController {
    constructor(connection) {
        this.userService = new UserService(connection)
    }

    createUser = async (req, res) => {
    }

    deleteUser = async (req, res) => {

    }

    updateUser = async (req, res) => {

    }
}