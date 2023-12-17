const express = require('express');
const router = express.Router();
const ROOT_URL = 'https://catfact.ninja'



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cats' });
});

router.get('/cats/fact', async function(req, res, next) {
  const catData = await fetch (`${ROOT_URL}/fact`) 
  .then(res=>res.json())
  res.render('cat/fact', { title: 'Cat Fact', catData });
});


module.exports = router;