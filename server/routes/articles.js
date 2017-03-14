var express = require('express');
var router = express.Router();

let Article = require('../controllers/article')

/* GET home page. */
router.post('/', Article.create);
router.get('/', Article.read);
router.put('/:slug', Article.update);
router.delete('/:slug', Article.deleteArticle)


module.exports = router;
