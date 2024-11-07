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
            Linkedin: req.body.linkedin,
            Periodo: req.body.periodo,
            Tecnologias: req.body.tecnologias
        }

        if(!await Estudante.findOne({where:{Name:aluno.Name}})){
           await Estudante.create(aluno) 
           req.flash('message', 'cadastrado com sucesso!')
           res.render('trabalheConosco')


        }else{
            req.flash('message', 'Essa pessoa já consta em nosso banco de dados!')
            res.render('trabalheConosco')
        }

        
    }
    static async show(req, res){
        req.flash('info', 'Flash Message Added');
    }
}