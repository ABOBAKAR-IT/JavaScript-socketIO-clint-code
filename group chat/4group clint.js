const io = require("socket.io-client");
const socket = io("http://127.0.0.1:3300")

socket.on("connect", () => {
   console.log(socket.id);
   socket.emit("create_group","bscs");
  });





function sendMessage(user,friend,message) {   
    socket.emit('group_chat', {
        group_name: user,
        sender_name: friend,
        message: message
    });
}
sendMessage("bscs","+923414122726","i am sad");

socket.on('group_chat', function (msg) {
   console.log(msg);
});


socket.on('chat', function (msg) {
    // let name = prompt("welcome login again")
    console.log(msg);
});

