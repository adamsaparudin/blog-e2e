const chai = require('chai');
const should = chai.should();


describe('Test Create E2E', function() {
  this.timeout(15000)
  var Nightmare = require('nightmare')({show: true});
  it('Should show article after it created', function(done) {
    Nightmare
      .goto('http://localhost:8080')
      .click('#create-article-btn')
      .wait(1000)
      .type('#article-form label input[name=title]', 'The Glory of Title')
      .type('#article-form label input[name=details]', 'The holy grails of jar dirt lorem ipsum shet')
      .type('#article-form label input[name=slug]', 'the-glory-of-title')
      .click('#post-article-btn')
      .wait(1000)
      .evaluate( function() {
        return document.querySelector('#article .col-sm-6 .thumbnail .caption h3').innerHTML
      })
      .end()
      .then( function(h3) {
        h3.should.equal('The Glory of Title')
        done()
      }).catch( function(err) {
        console.log(err);
      })
  })
})

describe('Test Edit E2E', function() {
  this.timeout(20000)
  var Nightmare = require('nightmare')({show: true});
  it('Should show article after it created', function(done) {
    Nightmare
      .goto('http://localhost:8080')
      .click('#article-btn')
      .wait(1000)
      .type('#article-edit-form label input[name=title]', 'The Glory of Edit a moment')
      .type('#article-edit-form label input[name=details]', 'The holy grails of jar dirt lorem ipsum shet')
      .type('#article-edit-form label input[name=slug]', 'the-glory-of-title')
      .click('#edit-article-btn')
      .wait(1000)
      .evaluate( function() {
        return document.querySelector('#article .col-sm-6 .thumbnail .caption h3').innerHTML
      })
      .end()
      .then( function(h3) {
        h3.should.equal('The Glory of Edit a moment')
        done()
      }).catch( function(err) {
        console.log(err);
      })
  })
})

describe('Test Delete E2E', function() {
  this.timeout(10000)
  var Nightmare = require('nightmare')({show: true});
  it('should Delete article', function(done) {
    Nightmare
      .goto('http://localhost:8080')
      .click('.delete-article-btn')
      .wait(1000)
      .evaluate( function() {
        return document.querySelector('#article').innerHTML
      })
      .end()
      .then (function(article) {
        article.should.equal('')
        done()
      }).catch( function(err) {
        console.log(err);
      })
  })
})
