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
    socket.emit("resetRoom", "true");
});