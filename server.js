var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/' , function(req , res){
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket){
    console.log('utilisateur connecté')

    socket.on('disconnect', function(){
        console.log('utilisateur deconnexté')
    })

    socket.on('tchat', function(msg){
        console.log('message recu' + msg)
        io.emit('tchat', msg)
    })
});

const host = '192.168.168.210';
const port = 3000;

http.listen(port, host, function(){
    console.log(`Server is running on http://${host}:${port}`)
})