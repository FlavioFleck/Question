import AlternativeService from "../services/AlternativeService.js";

export default class AlternativeController {
    constructor(connection) {
        this.alternativeService = new AlternativeService(connection)
    }

    createAlternative = async (req, res) => {
    }

    deleteAlternative = async (req, res) => {
    }

    updateAlternative = async (req, res) => {
    }
}