const Estudante = require("../models/Estudante")


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