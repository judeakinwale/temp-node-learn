const http = require('http')

const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     res.end('Welcome to our home page')
    // }
    // if (req.url === '/about') {
    //     res.end('Here is our about page')
    // }
    // res.end(`
    //     <h1>Oops!</h1>
    //     <p>We can't find that page</p>
    //     <a href='/'>return home</a>

    // `)
    console.log('request event')
    res.end('hello world')
})

server.listen(5000, () => {
    console.log('Server listening on port : 5000')
})
