var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {

  db.Link.findAll().success(function (links) {
    res.render('index', {
      title: 'Node bookmarks',
      links: links
    });
  });
});

router.get('/test', function (req, res) {
   res.send("This is a test page");
});

router.get('/links', function (req, res) {

  db.Link.findAll().success(function (links) {
  res.render('new-link', {
    title: 'Links page',
    links: links
  });
  console.log(links.title)
  });
});

router.get('/links/new', function (req, res) {
  res.send("This is a placeholder");

db.Link.create({
    title: "MA",
    url: "http://www.makersacademy.com",
    text: "Makers Academy official website"
  })
   .complete(function(err) {
         if (!!err) {
                 console.log('The instance has not been saved:', err)
         } else {
                 console.log('We have a persisted instance now')
         }
           })
});
