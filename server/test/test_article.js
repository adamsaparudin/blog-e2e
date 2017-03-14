// const chai = require('chai');
// const should = chai.should();
// const chaiHttp = require('chai-http');
// let Article = require('../models/article')
//
// chai.use(chaiHttp)
//
// let host = 'http://localhost:3000'
//
// describe("Article REST Testing", function() {
//
//   it("Test Read Article", function(done) {
//     chai.request(host)
//       .get('/articles')
//       .end(function(err, res) {
//         res.status.should.equal(200)
//         done()
//       })
//   })
//
//   it("Test Create Article", function(done) {
//     chai.request(host)
//       .post('/articles')
//       .send({
//         title: 'Shit article 2',
//         details: 'This shit is a fucking details and it is awesome',
//         slug: 'shit-article-2'
//       })
//       .end(function(err, res) {
//         Article.findOne({
//           title: "Shit article 2"
//         }).then( (data) => {
//           data.title.should.equal("Shit article 2")
//           data.details.should.equal("This shit is a fucking details and it is awesome")
//           data.slug.should.equal("shit-article-2")
//           res.status.should.equal(200)
//         }).catch( (err) => {
//           console.log(err);
//         })
//         done()
//       })
//   })
//
//   it("Test Edit Article", function(done) {
//     chai.request(host)
//       .put("/articles/shit-article-2")
//       .send({
//         title: 'Shit article revision 2',
//         details: 'This shit is a update details and it is awesome',
//         slug: 'shit-article-2'
//       })
//       .end(function(err, res) {
//         Article.findOne({
//           title: "Shit article revision 2"
//         }).then( (data) => {
//           data.title.should.equal("Shit article revision 2")
//           data.details.should.equal("This shit is a update details and it is awesome")
//           data.slug.should.equal("shit-article-2")
//           res.status.should.equal(200)
//         }).catch( (err) => {
//           console.log(err);
//         })
//         done()
//       })
//   })
//
//   it("Test delete Article", function(done) {
//     chai.request(host)
//       .delete('/articles/shit-article-2')
//       .end(function(err, res) {
//         Article.find({
//           title: "Shit article revision 2"
//         }).then( (data) => {
//           data.length.should.equal(0)
//           done()
//         }).catch( (err) => {
//           console.log(err);
//         })
//         // done()
//       })
//   })
//
//   it("Test Login shit", function(done) {
//     chai.request(host)
//     .get('/auth')
//     .auth('adam', '123')
//     .end(function(err, res) {
//       res.body.user.should.equal("adam")
//       done()
//     })
//   })
//
// })
