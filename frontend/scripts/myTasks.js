(function allTasks() {
let urlMain=`http://localhost:3000/tasks`;
let data = GetAll(urlMain).then(result =>myAlltasks(result));
})();

function myAlltasks(result){
  let length=result.length;
  let strNew = ' ';
  let strInProcess = ' ';
  let strComplete = ' ';
  let taskNew = document.getElementById('tasksNew');
  let taskInProcess = document.getElementById('tasksInProcess');
  let taskComplete = document.getElementById('tasksComplete');
for(let i=0;i<length;i++){
  if(result[i].manID===Number(localStorage.personID)){

let subLength=result[i].subtasks.length;
let subLengthChange;
if(subLength===0){subLengthChange=1;}
else {subLengthChange=subLength;}

let compliteLength=0;
for(let k=0;k<subLength;k++){
if(result[i].subtasks[k][1]==='true'){
  compliteLength++;
}
}

let percent=" ";
percent+=((Number(compliteLength)/subLengthChange)*100).toFixed(2);
percent+="%"
if(Number(compliteLength)===0){
strNew += `
<div><a href="javascript:openModal()">
<div>${result[i].taskName}${percent}
<progress id="progressbar" value=${compliteLength} max=${subLength}></progress>
  </a></div>`
  }

  else if(Number(compliteLength)<subLengthChange){
  strInProcess += `
<div><a href="javascript:openModal()">
  <div>${result[i].taskName}${percent}
  <progress id="progressbar" value=${compliteLength} max=${subLength}></progress>
    </a></div>`
    }

    else if(Number(compliteLength)===subLengthChange){
    strComplete += `
<div><a href="javascript:openModal()">
    <div>${result[i].taskName}${percent}
    <progress id="progressbar" value=${compliteLength} max=${subLength}></progress>
  </a></div>`
      }

}}
taskNew.innerHTML = strNew;
taskInProcess.innerHTML = strInProcess;
taskComplete.innerHTML = strComplete;
}

/* всплывающее окно */
var isInit = false;
function openModal(){
  var elModal  = document.querySelector('#Modal');
  if(isInit==false) {
   isInit = true;
   document.querySelector('.prefix-close').addEventListener('click',
        function(event) {
           event.preventDefault();
           elModal.classList.toggle('active');
        }
    );
  }
  elModal.classList.toggle('active');
}
