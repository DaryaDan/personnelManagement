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
  console.log(result[i].subtasks[k][1]);
if(result[i].subtasks[k][1]==='true'){
  compliteLength++;
}
}

let percent=" ";
percent+=((Number(compliteLength)/subLengthChange)*100).toFixed(2);
percent+="%"
if(Number(compliteLength)===0){
strNew += `
<div>
<div>${result[i].taskName}${percent}
<progress id="progressbar" value=${compliteLength} max=${subLength}></progress>
    </div>`
  }

  else if(Number(compliteLength)<subLengthChange){
  strInProcess += `
  <div>
  <div>${result[i].taskName}${percent}
  <progress id="progressbar" value=${compliteLength} max=${subLength}></progress>
      </div>`
    }

    else if(Number(compliteLength)===subLengthChange){
    strComplete += `
    <div>
    <div>${result[i].taskName}${percent}
    <progress id="progressbar" value=${compliteLength} max=${subLength}></progress>
        </div>`
      }

}}
taskNew.innerHTML = strNew;
taskInProcess.innerHTML = strInProcess;
taskComplete.innerHTML = strComplete;
}
