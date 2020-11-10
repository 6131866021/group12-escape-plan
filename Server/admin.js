const socket = io();

socket.emit("fromAdmin", "true");

socket.on('population', (population) => {
    console.log(population)
    const popNum = document.querySelector('.popNum');
    const items = popNum.children
    popNum.innerText = population;
})

let reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
    socket.on("terminateRoom", (inRoom) => {
        io.to(inRoom).emit("roomTerminated");
        for (i in gameServer.ROOM_LIST[inRoom].users) {
            gameServer.USER_LIST[i].inRoom = undefined;
        }
        delete gameServer.ROOM_LIST[inRoom];
    });
});