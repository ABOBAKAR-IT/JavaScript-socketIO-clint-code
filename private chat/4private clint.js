const io = require("socket.io-client");
const socket = io("https://mix-chat-1.herokuapp.com")
var uname, friend_name;
console.log("welcome");
socket.on("connect", () => {
   console.log(socket.id);
   socket.emit("register", "raja");
  });

socket.on('private_chat', function (msg) {
   console.log(msg);
});


socket.on('chat', function (msg) {
    // let name = prompt("welcome login again")
    console.log(msg);
});

