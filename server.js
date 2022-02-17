require('dotenv').config({ path: './.env' })
const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());

app.use(function (req, res, next) {
    console.log(`${new Date().toLocaleTimeString('pt-br')} -- ${req.hostname} -- from ip: ${req.ip} -- ${req.method} -- ${req.originalUrl}`);
    res.set("Server", "BattlesnakeOfficial/starter-snake-javascript")
    next()
})

app.use('', routes)

app.listen(process.env.SERVER_PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT || 5000}`);
})