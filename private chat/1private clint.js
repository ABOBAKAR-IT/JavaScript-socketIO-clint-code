const io = require("socket.io-client");
const socket = io("http://localhost:3300")
var uname, friend_name;
console.log("welcome");
socket.on("connect", () => {
   console.log(socket.id);
   socket.emit("register","abobakar");
  });




function sendMessage(user,friend,message) {
   

    socket.emit('private_chat', {
        user: user,
        friend: friend,
        message: message
    });
}
sendMessage("abobakar","raja","i am abobakar");

socket.on('private_chat', function (msg) {
   console.log(msg);
});


socket.on('chat', function (msg) {
    // let name = prompt("welcome login again")
    console.log(msg);
});

