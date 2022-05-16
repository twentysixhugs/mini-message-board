const express = require('express');
const router = express.Router();
const { addMessage, messages } = require('../modules/messages');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages });
});

router.get('/new', function (req, res, next) {
  res.render('form');
});

router.post('/new', function (req, res, next) {
  addMessage(req.body.messageText, req.body.messageUser);
  res.redirect('/');
});

module.exports = router;
