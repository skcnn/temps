import express from 'express'

const app = express();

app.get('', (req, res)=>{
    res.send(req.socket.remoteAddress)
})

app.listen('8080', ()=>{
    console.log('server listening on 8080')
})
