import ProvaService from "../services/ProvaService";

export default class ProvaController {
    constructor(connection) {
        this.provaService = new ProvaService(connection)
    }

    createProva = (req, res) => {
    }

    deleteProva = (req, res) => {
    }

    updateProva = (req, res) => {
    }
}