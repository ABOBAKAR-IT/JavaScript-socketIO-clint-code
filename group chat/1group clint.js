const io = require("socket.io-client");
const socket = io("https://mix-chat-1.herokuapp.com")

socket.on("connect", () => {
   console.log(socket.id);
   socket.emit("register","+923084244302");
  });




function sendMessage(user,friend,message) {   
    socket.emit('group_chat', {
        group_name: user,
        friend: friend,
        message: message
    });
}
sendMessage("bsit","+923494154776","i am abobakar");

socket.on('group_chat', function (msg) {
   console.log(msg);
});


socket.on('chat', function (msg) {
    // let name = prompt("welcome login again")
    console.log(msg);
});

