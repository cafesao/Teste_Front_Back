module.exports = {
    
    calcular(req, res) {
        const ReqMat = req.body
        const { expr } = ReqMat
        const ResMat = {
            'result' : eval(expr)
        }
        return res.json(ResMat)
    }
}