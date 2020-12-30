var router = require('express').Router()


router.get('/home', function (req, res, next) {
    res.render('views/index')
})

router.post('/', function (req, res) {
    console.log(req.body);
    res.redirect('/')
})
module.exports = router;