(function allNews() {
let urlMain=`http://localhost:3000/news`;
let data = GetAll(urlMain).then(result =>news(result));
})();


function news(result){
  let length=result.length;
  let staff = document.getElementById('main');
  let str = ' ';
  for(let i=length-1;i>=0;i--){
let authorName = result[i].authorName;
let news = result[i].news;
let data = result[i].data;
let type = result[i].type;
let color;
if(result[i].type==="Сотрудники"){
color="#E94B3C";
}
else if(result[i].type==="Культура‎ и спорт"){
color="#00A591";
}
else if(result[i].type==="Экономика‎"){
color="#6C4F3D";
}
else if(result[i].type==="Наука и технологии"){
color="#6B5B95";
}
else{
color="#BC70A4";
}
str += `
<div class="card">
<div class="type" style="background-color: ${color};">${type}</div>
<button>Читать полностью</button>
<div class="news" tabindex="0">${news}</div>
<span class="authorName">Автор: ${authorName}</span>
<span class="data">${data}</span>
    </div>`


}
staff.innerHTML = str;
}
