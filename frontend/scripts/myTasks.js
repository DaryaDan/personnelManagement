let text="";
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
    let sub="";
    for(let t=0;t<subLength;t++){
  sub+=result[i].subtasks[t][0];
      if (result[i].subtasks[t][1]==="true"){
        sub+=`(+)`;
      }
      else {
        sub+=`(-)`;
      }
  sub+=`; `;
    }
    text+=`
    --------${result[i].taskName}--------
    Описание: ${result[i].description}
    Подзадачи: ${sub}
    Срок выполнения до ${result[i].term}
    Тип сложности: ${result[i].type}
    `;

let compliteLength=0;
for(let k=0;k<subLength;k++){
if(result[i].subtasks[k][1]==='true'){
  compliteLength++;
}
}
let percent=" ";
percent+=((Number(compliteLength)/subLength)*100).toFixed(2);
percent+="%"
if(Number(compliteLength)===0){
strNew += `
<div id="${result[i].taskID}"><a id="${result[i].taskID}">
<div id="${result[i].taskID}">${result[i].taskName} (${percent})<img id="img${result[i].taskID}" class="info" src="https://i.ibb.co/2jPbQSX/info.png" alt="info">
<progress id="${result[i].taskID}" value=${compliteLength} max=${subLength}></progress>
  </a></div>`
  }

  else if(Number(compliteLength)<subLength){
  strInProcess += `
  <div id="${result[i].taskID}"><a id="${result[i].taskID}">
  <div id="${result[i].taskID}">${result[i].taskName} (${percent})<img id="img${result[i].taskID}" class="info" src="https://i.ibb.co/2jPbQSX/info.png" alt="info">
  <progress id="${result[i].taskID}" value=${compliteLength} max=${subLength}></progress>
    </a></div>`
    }

    else if(Number(compliteLength)===subLength){
    strComplete += `
    <div id="${result[i].taskID}"><a id="${result[i].taskID}">
    <div id="${result[i].taskID}">${result[i].taskName} (${percent})<img id="img${result[i].taskID}" class="info" src="https://i.ibb.co/2jPbQSX/info.png" alt="info">
    <progress id="${result[i].taskID}" value=${compliteLength} max=${subLength}></progress>
      </a></div>`
      }

}}
taskNew.innerHTML = strNew;
taskInProcess.innerHTML = strInProcess;
taskComplete.innerHTML = strComplete;
}



/* всплывающее окно*/

const modal = document.getElementById('Modal');
const modal1 = document.getElementById('Modal1');
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

  let urlMain=`http://localhost:3000/tasks`;
  let data = GetAll(urlMain).then(result =>{
    let k=result.length;
    for (let i=0;i<k;i++){
if(Number(event.target.id)===result[i].taskID){
    modal.style.display = "block";
  modalNew(result[i]);
}
let infoId="img"+result[i].taskID;
if(event.target.id===infoId){
    modal1.style.display = "block";
  modalInfo(result[i]);
}
    }
  });
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        location.reload();
    }
    if (event.target === modal1) {
        modal1.style.display = "none";
    }
}

function modalNew(result){

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

  modal.innerHTML = `
  <div>
  <h2>${result.taskName}</h2>
  <div class="prefix-tabs"><ol id="str">
${addArr}
</ol>
  </div>
  </div>`

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

function modalInfo(result){
  modal1.innerHTML = `
  <div class="prefix-tabs">
  <h2>${result.taskName}</h2>
  <div class="resSub1">${result.description}</div>
  <div class="resSub1">Срок до: ${result.term}</div>
  <div class="resSub1">Тип задачи: ${result.type}</div>
  </div>`
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


////////Сохранение
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("tooltip").addEventListener("click", function(){

let now = new Date().toLocaleString();

    let filename = `задачи на ${now}.txt`;

    download(filename, text);
}, false);
