const io = require("socket.io-client");
// const socket = io("https://mix-chat-1.herokuapp.com")
const socket = io("http://127.0.0.1:3300")
var uname, friend_name;
console.log("welcome");
socket.on("connect", () => {
   console.log(socket.id);
   socket.emit("register", "+abobakar");
  });

function sendMessage(user,friend,message) {
 
    socket.emit('private_chat', {
        user: user,
        friend: friend,
        message: message
    });
}
sendMessage("+abobakar","+tayyab","i am abobakar");

socket.on('private_chat', function (msg) {
   console.log(msg);
});


socket.on('chat', function (msg) {
    // let name = prompt("welcome login again")
    console.log(msg);
});

