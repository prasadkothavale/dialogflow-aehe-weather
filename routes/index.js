var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/helloHttp', function (req, res, next) {
  let response = 'This is sample GET response from webhook';

  res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
  res.send(JSON.stringify({
    "speech": response, "displayText": response
    //"speech" is the spoken version of the response, "displayText" is the visual version
  }));
})

router.post('/helloHttp', function (req, res, next) {
  let response = req.body;

  res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
  res.send(JSON.stringify({
    "speech": response, "displayText": response
    //"speech" is the spoken version of the response, "displayText" is the visual version
  }));
})

module.exports = router;
