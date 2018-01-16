// берём Express
var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'Test')));
http://localhost:8080
app.get('/css/bootstrap.css', function (req, res) {
    res.sendfile('./css/bootstrap.css');
});
app.get('/css/Test.css', function (req, res) {
    res.sendfile('./css/Test.css');
});
app.get('/images/css.png', function (req, res) {
    res.sendfile('./images/css.png');
});
app.get('/js/textria.js', function (req, res) {
    res.sendfile('./js/textria.js');
});
app.get('/js/textyandex.js', function (req, res) {
    res.sendfile('./js/textyandex.js');
});
app.get('/js/vkl.js', function (req, res) {
    res.sendfile('./js/vkl.js');
});
app.get('/js/test.js', function (req, res) {
    res.sendfile('./js/test.js');
});
app.get('/js/tb.js', function (req, res) {
    res.sendfile('./js/tb.js');
});
app.get('/st.html', function (req, res) {
    res.sendfile('st.html');
});
app.get('/nd.html', function (req, res) {
    res.sendfile('nd.html');
});
app.get('/rd.html', function (req, res) {
    res.sendfile('rd.html');
});

// запускаем сервер на порту 8080
app.listen(8080);
// отправляем сообщение
console.log('Start!');