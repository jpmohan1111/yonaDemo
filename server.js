var express = require('express');
var app = express();
var port = Number(process.env.PORT || 3333);
// var host = 'localhost';

app.use(express.static(__dirname));
// app.use("/Yona", express.static(__dirname + '/Yona_Page'));

app.listen(port, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log("Express server listening on port", port);
    }
});
