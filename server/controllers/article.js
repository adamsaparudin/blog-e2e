let Article = require('../models/article')

module.exports = {
  create: function(req, res, next) {
    let doc = new Article({
      title: req.body.title,
      details: req.body.details,
      slug: req.body.slug
    })
    doc.save().then( (data) => {
      res.json(data)
    }).catch( (err) => {
      res.send(err)
    })
  },

  read: function(req, res, next) {
    Article.find({}).then( (Articles) => {
      res.send(Articles)
    }).catch( (err) => {
      res.send(err)
    })
  },

  update: function(req, res, next) {
    console.log(req.body);
    Article.findOneAndUpdate({slug: req.params.slug}, req.body, {}, (err, doc) => {
      if(err) res.send(err)
      else res.send(doc)
    })
  },

  deleteArticle: function(req, res, next) {
    Article.remove({slug: req.params.slug}, (err, docs) => {
      if (err) res.send(err)
      else res.send(docs)
    })
  }
}
