const Estudante = require("../models/Estudante")
const Tecnologias = require("../models/Tecnologias")
const Estudante_Tecnologias = require("../models/Estudante_Tecnologias")


module.exports = class trabalheConoscoController {
    static async carregaPage(req, res) {
        res.render('trabalheConosco')
    }
    static async saveAluno(req, res) {

        const aluno = {
            Name: req.body.name,
            Telefone: req.body.telefone,
            Email: req.body.email,
            Periodo: req.body.periodo,
            Tecnologias: req.body.tecnologias
        }
        await Estudante.create(aluno)



    }
}