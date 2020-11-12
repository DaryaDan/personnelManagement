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
<div id="${result[i].taskID}"><a id="${result[i].taskID}">
<div id="${result[i].taskID}">${result[i].taskName}${percent}
<progress id="${result[i].taskID}" value=${compliteLength} max=${subLength}></progress>
  </a></div>`
  }

  else if(Number(compliteLength)<subLengthChange){
  strInProcess += `
  <div id="${result[i].taskID}"><a id="${result[i].taskID}">
  <div id="${result[i].taskID}">${result[i].taskName}${percent}
  <progress id="${result[i].taskID}" value=${compliteLength} max=${subLength}></progress>
    </a></div>`
    }

    else if(Number(compliteLength)===subLengthChange){
    strComplete += `
    <div id="${result[i].taskID}"><a id="${result[i].taskID}">
    <div id="${result[i].taskID}">${result[i].taskName}${percent}
    <progress id="${result[i].taskID}" value=${compliteLength} max=${subLength}></progress>
      </a></div>`
      }

}}
taskNew.innerHTML = strNew;
taskInProcess.innerHTML = strInProcess;
taskComplete.innerHTML = strComplete;
}



/* всплывающее окно */

const modal = document.getElementById('Modal');
// let span;
const newT1 = document.getElementById('tasksNew');
newT1.addEventListener('click', (event) => {
  eventTask(event);
});

const newT2 = document.getElementById('tasksInProcess');
newT2.addEventListener('click', (event) => {
  eventTask(event);
});

const newT3 = document.getElementById('tasksComplete');
newT3.addEventListener('click', (event) => {
  eventTask(event);
});

  function eventTask(event) {
  modal.style.display = "block";
  let urlMain=`http://localhost:3000/tasks`;
  let data = GetAll(urlMain).then(result =>{
    let k=result.length;
    for (let i=0;i<k;i++){
if(Number(event.target.id)===result[i].taskID){
  modalNew(result[i]);
}
    }
  });
//   span = document.getElementsByClassName("prefix-close");
// console.log(span);
// span.onclick = function() {
//   console.log("444");
//    modal.style.display = "none";
// }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        location.reload();
    }
}

function modalNew(result){
  let taskNew = document.getElementById('Modal');

  let addArr=" ";
  let len=result.subtasks.length;
  for(let u=0;u<len;u++){
if(result.subtasks[u][1]==="true"){
addArr += `<li><div id=${u} class="resSub cross">${result.subtasks[u][0]}</div></li>`
}
else {
  addArr += `<li><div id=${u} class="resSub">${result.subtasks[u][0]}</div></li>`
}
  }

  taskNew.innerHTML = `
  <div>
  <h2>${result.taskName}</h2>
  <div class="prefix-tabs"><ol id="str">
${addArr}
</ol>
  </div>
  </div>` //<div class="close">	<a class="prefix-close" title="Закрыть" href="#close">Закрыть</a></div> перед последним div

  const round = document.getElementById('str');
  round.addEventListener('click', (e) => {
    let h=document.getElementById(e.target.id);
    if (e.target.classList.contains("cross")){ //если зачеркнуто
  e.target.classList.remove("cross");
  for(let s=0;s<len;s++){
if(h.innerHTML===result.subtasks[s][0]){
  result.subtasks[s][1]="false";
}
  }
}

  else {
  e.target.classList.add("cross");  //если хотим зачеркнуть
  for(let s=0;s<len;s++){
if(h.innerHTML===result.subtasks[s][0]){
  result.subtasks[s][1]="true";
}
  }
}
 /////////////////////////ВЫЗЫВАЮ АПДЕЙТ
updateTask(result);
  });
}

function updateTask(result) {
  let urlMain=`http://localhost:3000/tasks/getproduct/?taskID=${result.taskID}`;
  const body = {
    manID: `${result.manID}`,
    taskID: `${result.taskID}`,
    taskName: `${result.taskName}`,
    description: `${result.description}`,
    term: `${result.term}`,
    subtasks: result.subtasks,
    type: `${result.type}`
  };
let dataAllMain = UpdateOne(urlMain,body);
}
