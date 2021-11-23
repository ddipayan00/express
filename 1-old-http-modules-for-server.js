const http = require('http')
const {readFileSync} = require('fs')
const path = require('path')
const homePage = readFileSync(path.join(__dirname,'navbar-app','index.html'))
const homeStyles = readFileSync(path.join(__dirname,'navbar-app','styles.css'))
const homeImage = readFileSync(path.join(__dirname,'navbar-app','logo.svg'))
const homeLogic = readFileSync(path.join(__dirname,'navbar-app','browser-app.js'))
const server = http.createServer((req,res) => {
    // console.log(req.method)
    // console.log(req.url)
    const url = req.url;
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    }
    else if(url === '/index.html'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    }
    else if(url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyles)
        res.end()
    }
    else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    else if(url === '/about.html'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About Page</h1><br><h2>Currently Working on About Page</h2>')
        res.end()
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Error Page not Found</h1>')
        res.end()
    }
})
server.listen(5000)

