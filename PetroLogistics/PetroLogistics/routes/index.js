var express = require('express');
var router = express.Router();
var http = require('http');

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

/* GET single post page */
router.get('/post', function (req, res) {
    res.render('post');
}); 

/* GET contacts page */
router.get('/contact', function (req, res) {
    res.render('contact');
}); 

/* GET login page */
router.get('/login', function (req, res) {

    res.render('login');

}); 

router.post('/send_form', function (req, res) {

   
    var data = req.body; 

	var str = JSON.stringify({

        "key": "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",
        "subject": "Contact Message",
        "emailTo": "info@petro-logistics.com",
        "emailFrom": "info@dinamicka.com",
        "html": '<strong> Message </strong> ' +
        '<p>First name: ' + data.first_name + '</p>' +
        '<p>Last name: ' + data.last_name + '</p>' +
        '<p>Email: ' + data.email + '</p>' + 
        '<p>Company: ' + data.company + '</p>' + 
        '<p>Phone: ' + data.phone + '</p>' + 
        '<p>Message: ' + data.comment + '</p>'

    });


     var data_to_send = encodeURI(str);
     var request_data = 'req=' + data_to_send;


     var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;',
            'Content-Length': Buffer.byteLength(request_data)
        },
        hostname: 'dinamickamail.azurewebsites.net',
        path: '/mail.php'

	}

	var http_req = http.request(options);
	http_req.write(request_data);
    http_req.end();
    http_req.on('error', function (err) {
        console.log(err); 
    })

})

module.exports = router;