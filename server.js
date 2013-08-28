var http = require('http'),
    url = require('url');

console.log('Starting Tiny URL service on port 80');

http.createServer(function(req, res) {
    var parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname == '/ping') {
        res.writeHead(200, {
            'Content-Length': 0
        });
    } else {
        res.writeHead(307, {
            'Location': 'satchel://' + parsedUrl.pathname.replace(/^\//, '')
        });
    }

    res.end();
}).listen(process.env.PORT);