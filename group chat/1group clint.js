const io = require("socket.io-client");
//const socket = io("https://mix-chat-1.herokuapp.com")
const socket = io("http://127.0.0.1:3300")



socket.on("connect", () => {
   console.log(socket.id);
   socket.emit("create_group",{groupname:"bsit",admin:"+923147593927"});
  });

socket.on("create_group",(data)=>{
    console.log(data);
})


function sendMessage(user,friend,message) {   
    socket.emit('group_chat', {
        group_name: user,
        sender_name: friend,
        message: message
    });
}
//sendMessage("bsit","+923494154776","i am abobakar");

socket.on('group_chat', function (msg) {
   console.log(msg);
});


socket.on('chat', function (msg) {
    // let name = prompt("welcome login again")
    console.log(msg);
});

