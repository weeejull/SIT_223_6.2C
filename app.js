const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { default: isEmail } = require('validator/lib/isEmail');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (CSS, images, etc.)
app.use(express.static(__dirname));

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
var email;
var domain = 'sandbox4eb977829102460e8712c132351bfb2d.mailgun.org';
var api_key = 'key-75fa5c7e7207c321f3b16160b9d84628';
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

app.post('/signup', (req, res) => {
    email = req.body.email;
    const mailOptions = {
        from: 'vijul4860.be22@chitkara.edu.in',
        to: email,
        subject: 'Welcome to DEV@Deakin website!',
        text: Thank you for signing up with your email for our daily news letter. : ${email}
    };
    console.log(req.body);
    console.log(email);
    mailgun.messages().send(mailOptions, (error, body) => {
        if (error) {
            console.log(error);
            res.status(500).send('An error occurred while sending the email.');
        } else {
            console.log('Email sent:', body);
            res.send('Thank you for signing up! Check your email for a welcome message.');
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(Server is running on port ${PORT});
});
