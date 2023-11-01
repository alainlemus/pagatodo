const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();

app.use(express.json());
app.disable('x-powered-by');
app.use(cors())

app.get('/', (req, res) => {
    request("https://dev.obtenmas.com/catom/api/challenge/banks",(err,response,body)=>{
        console.log(body, response, err)
        res.status(200).send(JSON.parse(body))
    })
})

const port = 89;
app.listen(port, () => console.log('escuchando en el puerto 89'))