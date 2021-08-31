var express = require('express');
var router = express.Router();
const {postUser} = require('../controllers/auth')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/createUser', postUser)

module.exports = router;
