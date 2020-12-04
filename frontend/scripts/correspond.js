  var emojis = JSON.parse(`[{"name":"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/grinning-face_1f600.png"},
  {"name":"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/grinning-face-with-sweat_1f605.png"},
  {"name":"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/winking-face_1f609.png"},
  {"name":"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/face-with-rolling-eyes_1f644.png"},
  {"name":"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/unamused-face_1f612.png"},
  {"name":"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/face-with-raised-eyebrow_1f928.png"},
  {"name":"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/face-with-open-mouth_1f62e.png"},
  {"name":"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/slightly-frowning-face_1f641.png"},
  {"name":"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/fearful-face_1f628.png"},
  {"name":"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/weary-face_1f629.png"},
  {"name":"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/pouting-face_1f621.png"},
  {"name":"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/victory-hand_270c-fe0f.png"},
  {"name":"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/thumbs-up_1f44d.png"},
  {"name":"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/thumbs-down_1f44e.png"},
  {"name":"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/index-pointing-up_261d-fe0f.png"},
  {"name":"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/star_2b50.png"},
  {"name":"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/red-heart_2764-fe0f.png"},
  {"name":"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/zzz_1f4a4.png"},
  {"name":"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/fire_1f525.png"},
  {"name":"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/bomb_1f4a3.png"}]`);

  // Selectors
  var messages = document.querySelector('.messages')
  var sendMes = document.querySelector('.sendMes')
  var input = document.querySelector('.input input')
  var emojiholder = document.querySelector('.emoji-holder')
  var emojiwrapper = document.querySelector('.emoji-wrapper')
  var emojibtn = document.querySelector('.emoji-btn')

  // Button/Enter Key
  sendMes.addEventListener('click', sendMessage)
  input.addEventListener('keyup', function(evt){ if(evt.keyCode == 13) sendMessage() })
  emojibtn.addEventListener('click', function(e){
     e.stopPropagation()
     this.classList.toggle('open')
  })
  document.body.addEventListener('click', function(){
     emojibtn.classList.remove('open')
  })

  let urlMain=`http://localhost:3000/correspond`;
let data = GetAll(urlMain).then(result => {
  lengthMess=result.length;
  result.forEach(mail => {
  writeLine(mail.mail,mail.fullName,mail.time,mail.correspondID)})
})

window.setInterval(function(){ // Set interval for checking
    let url=`http://localhost:3000/correspond`;
  let data = GetAll(url).then(result => {
      if (lengthMess!==result.length){
          location.reload();
      }
  })
}, 6000); // Repeat every 60000 milliseconds (1 minute)

// Messenger Functions
function sendMessage(){
   var msg = input.value;
   input.value = '';
   name=localStorage.name;
     var now = new Date().toLocaleString();
     let id=lengthMess;
     id++;
   writeLine(msg,name,now,id);
}
function addMessage(evt){
   console.log(evt);
   var msg = evt.data ? JSON.parse(evt.data) : evt;
   writeLine(`${msg.FROM}: ${msg.MESSAGE}`)
}
function writeLine(text,name,now,id){
   var message = document.createElement('div')
   message.classList.add('message')
   message.innerHTML= `
   <span id="${id}"><span class="lineName">${name}</span><span class="lineText">${text} </span><span class="lineTime">${now}</span></span>`
   messages.appendChild(message)
   messages.scrollTop = messages.scrollHeight;
   if (id>lengthMess){
     lengthMess++;
   writeMessage(text,name,now,id);
 }
}

function writeMessage(text,name,now,id) {
const body = {
  correspondID: `${id}`,
  fullName: `${name}`,
  mail: `${text}`,
  time: `${now}`
};
let dataAll = AddOne(urlMain,body);
}

// Load the Emojies
for(var i = 0; i < emojis.length; i++){
   if(emojis[i].name == null) continue
   emojiwrapper.innerHTML += `
      <img class="emoji-img" src="${emojis[i].name}"/>
   `
}

// Emoji Events
var emojiElements = []
setTimeout(function(){
   emojiElements = document.querySelectorAll('.emoji-popup .emoji-img')
   for(var i = 0; i < emojiElements.length; i++){
      emojiElements[i].addEventListener('click', function(){
         input.value = `<img style="width:48px; height: 48px" src="${this.getAttribute('src')}"/>`
         sendMessage()
         emojibtn.classList.remove('open')
      })
   }
})
