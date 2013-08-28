var http = require('http'),
    url = require('url');

http.createServer(function(req, res) {
    var parsedUrl = url.parse(req.url, true);

    res.writeHead(307, {
        'Location': 'satchel://' + parsedUrl.pathname.replace(/^\//, '')
    });

    res.end();
}).listen(80);