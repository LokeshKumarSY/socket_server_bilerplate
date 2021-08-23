
function listen(socket_io) {
    socket_io.of('/gatewayDetails').on('connection', (socket) => {
        console.log("Client connected to gateway detail namespace.");
        socket.join('sampleroom');
    })

    socket_io.on("connection", (socket) => {
        socket.data.username = "alice";
        console.log('Alice connected...')
        console.log('Socket server Events Registering...');

        socket.on('e1', data => {
            //segreagate your data and broadcat to right room
            let ns = data.ns ? data.ns : '/';
            let en = data.en ? data.en : 'e1';
            let room = data.room ? data.room : 'firstRoom';
            console.log(ns, en, room);
            //emit data to the right room on right event
            socket_io.of(ns).to(room).emit(en, data)
        })

    });

}

module.exports = listen
