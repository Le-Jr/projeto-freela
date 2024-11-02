const Tecnologias = require("../models/Tecnologias")

class stacksController {
    static async carregaPage(req, res) {
        res.render('stack');
    }
    static async saveStack(req, res) {
        
        await Tecnologias.create({ Stack: req.body.Stack })
        const tecnologias = await Tecnologias.findAll({ raw: true })
        console.log(tecnologias)
        res.render('stack')
    }
}
module.exports = stacksController