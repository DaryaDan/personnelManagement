(function allStaff() {
let urlMain=`http://localhost:3000/main`;
let urlDescription = `http://localhost:3000/description`;
let dataGetPassword = GetAll(urlMain).then(result =>(GetAll(urlDescription).then(data =>staff(result,data))));
})();


function staff(result,data){
  let length=result.length;
  let lengthData=data.length;

  let staff;
  let str = ' ';
  if (length===0){
    staff = document.getElementById('mainBack');
    str += `
    <img src='https://i.ibb.co/27hfS2T/fludd.jpg' alt='Photo' width="100%"/>`
document.getElementById('main').style.display = 'none';
  }
  else{
    staff = document.getElementById('main');
  for(let i=0;i<length;i++){
    if (+localStorage.personID!==result[i].personID){
let name = result[i].fullName;
let img = 'https://morane.by/images/work1.png';
let position="Должность не определена";
  for(let k=0;k<lengthData;k++){
  if(result[i].personID===data[k].descriptionID){
    if (data[k].img!==undefined){img=data[k].img;}
    if (data[k].position!==undefined){position=data[k].position;}
  }}

str += `
<div class="card" id=${result[i].personID}>
  <div class="card-foto">
          <img class="photo" src=${img} alt='Photo'/>
  </div>
    <div class="card-text">
          <h1 class="title">${name}</h1>
          <h4 class="sub-title">${position}</h4>
          </div>
    </div>`

  }}
  document.getElementById('mainBack').style.display = 'none';

}
staff.innerHTML = str;
}


//просмотреть выполнение задач сотрудниками

const modal = document.getElementById('Modal');
const newT = document.getElementById('main');
newT.addEventListener('click', (event) => {
  eventTask(event);
});


  function eventTask(event) {
  modal.style.display = "block";
  let urlTasks=`http://localhost:3000/tasks`;
  let data = GetAll(urlTasks).then(result =>{
    let k=result.length;
    let allManTasks=[];
    for (let i=0;i<k;i++){
if(Number(event.path[2].id)===result[i].manID){
allManTasks.push(result[i]);
}
    }
      modalNew(allManTasks);
  });
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function modalNew(result){
  let taskNew = document.getElementById('Modal');

  let addArr=" ";
  let len=result.length;

if(len===0){
  taskNew.innerHTML = `
  <div>
  <h2>Нет задач</h2>
  </div>`
}
else{
  for(let u=0;u<len;u++){
    console.log(result[u]);
    let lenSub=result[u].subtasks.length;
    let trueT=0;
      for(let s=0;s<lenSub;s++){
        result[u].subtasks[s][1]==="true"?trueT++:false;
      }
      let percent=" ";
      percent+=((Number(trueT)/lenSub)*100).toFixed(2);
    addArr += `<li><div class="resSub">${result[u].taskName} (${percent}%)</div></li>`
}

  taskNew.innerHTML = `
  <div>
  <h2>Задачи</h2>
  <div class="prefix-tabs"><ol id="str">
${addArr}
</ol>
  </div>
  </div>`
}
}
