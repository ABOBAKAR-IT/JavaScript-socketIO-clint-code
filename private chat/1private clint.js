const io = require("socket.io-client");
// const socket = io("https://mix-chat-1.herokuapp.com")
const socket = io("http://127.0.0.1:3300")
var uname, friend_name;
console.log("welcome");
socket.on("connect", () => {
   console.log(socket.id);
   socket.emit("register","+923147593927");
  });




function sendMessage(user,friend,message) {
   

    socket.emit('send_file', {
        user: user,
        friend: friend,
        filename: message
    });
}
sendMessage("+923147593927","+923084244302","http://localhost:3300/images/myFile-1659984081139.jpg");

socket.on('send_file', function (msg) {
   console.log(msg);
});


socket.on('chat', function (msg) {
    // let name = prompt("welcome login again")
    console.log(msg);
});

