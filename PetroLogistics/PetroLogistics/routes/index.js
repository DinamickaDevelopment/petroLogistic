var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
}); 

/* GET about page */
router.get('/about', function (req, res) {
    res.render('about');
}); 

/* GET history page */
router.get('/history', function (req, res) {
    res.render('history');
}); 

/* GET services main page */
router.get('/services', function (req, res) {
    res.render('services');
});  

/* GET opec service page */
router.get('/services/opec', function (req, res) {
    res.render('opec');
}); 

/* GET soviet export service page */
router.get('/services/soviet', function (req, res) {
    res.render('soviet');
}); 

/* GET country reports page */
router.get('/services/country', function (req, res) {
    res.render('country');
}); 

/* GET posts page */
router.get('/posts', function (req, res) {
    res.render('posts');
}); 

/* GET contacts page */
router.get('/contact', function (req, res) {
    res.render('contact');
}); 


module.exports = router;