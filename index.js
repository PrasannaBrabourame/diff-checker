const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();
const port = 1800;
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, "views"));

const logFormat = 'combined';
app.use(logger(logFormat));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public", { maxAge: 31557600000 }));

let config = {

}
app.get('/', (req, res) => {
    res.send("Hello World")
});
app.get('/main', (req, res) => {
    res.sendFile('views/index.html', { root: __dirname })
})
const httpServer = require("http").createServer(app);
httpServer.listen(port, function () {
    console.log(`Proxy Server Opened on the port ${port}`)
});

module.exports = { app, config };