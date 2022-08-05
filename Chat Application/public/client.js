const socket = io()
let Uname;
let textarea = document.querySelector('#textarea');
let messageArea = document.querySelector('.msg_area');

do{
    Uname = prompt("Please enter your name");

}while(!Uname);

textarea.addEventListener('keyup', (e)=>{
if(e.key==='Enter'){
    sendMessage(e.target.value);
}
})

function sendMessage(message){
    let msg = {
        user: Uname,
        message: message.trim()
    }

    appendMessage(msg, 'outgoing')
    scrollToBottom();
    textarea.value = "";
    // socket connection....
    socket.emit('message', msg)
}

function appendMessage(msg, type){
   let mainDiv = document.createElement('div')
   let className = type
   mainDiv.classList.add(className,'message')

   let markup = `
   <h4>${msg.user}</div>
   <p>${msg.message}</p>
   `

   mainDiv.innerHTML = markup;

   messageArea.appendChild(mainDiv);
}

//r

socket.on('message', (msg)=>{
  appendMessage(msg, 'incoming')
  scrollToBottom();
})


function scrollToBottom(){
    messageArea.scrollTop = messageArea.scrollHeight;
}