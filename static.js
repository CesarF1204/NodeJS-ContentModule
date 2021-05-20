module.exports = function(request, response) {
    const fs = require('fs');
    response.writeHead(200, {'Content-type': 'text/html'});
    console.log('Request', request.url);
    //find url
    let ext = '';
    let index;
    for(let i = 0; i < request.url.length ; i++) {
        if (request.url[i] == '.') {
            index = i;
        }
        if (i > index) {
            ext += request.url[i];
        }
    }
    //VIEWS
    if(request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    } else if(ext == 'html') {
        let localURL = 'views' + request.url;
        fs.readFile(localURL, 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    //CSS
    else if(ext == 'css') {
        let localURL = './css' + request.url;
        fs.readFile(localURL, 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    //JS
    else if(ext == 'js') {
        let localURL = './js' + request.url;
        fs.readFile(localURL, 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/javascript'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    //IMAGE
    else if(ext == 'png') {
        let localURL = './images' + request.url;
        fs.readFile(localURL, function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/png'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    } else if(ext == 'jpg') {
        let localURL = './images' + request.url;
        fs.readFile(localURL, function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    } else {
        response.end('File not found!!!');
    }
}