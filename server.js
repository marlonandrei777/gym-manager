const express = require('express'); /*chamando o express*/
const nunjucks = require('nunjucks');
const routes = require("./routes");
const methodOverride = require("method-override");

const server = express(); /*criando o servidor*/

server.use(express.urlencoded({ extended: true })) /*responsavel por fazer funccionar o re.body*/ 
server.use(express.static('public'))
server.use(methodOverride('_method'))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(5000, function () {
    console.log('server is runnig')
})
