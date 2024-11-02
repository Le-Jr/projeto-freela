module.exports = class paginaInicial{
    static async carregaPage(req,res){
        res.render('paginaInicial')
    }
}