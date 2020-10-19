var $wrap = $('#main');
var $signUpBtn = $wrap.find('#signUpBtn');
var $loginBtn = $wrap.find("#loginBtn");

$signUpBtn.on('click', function() {
    $wrap.addClass('singUpActive');
    $wrap.removeClass('loginActive');
});

$loginBtn.on('click', function() {
    $wrap.addClass('loginActive');
    $wrap.removeClass('singUpActive');
});

let a = document.getElementById('singup');
    a.onclick = function putData() {
    let url=`http://localhost:3000/main`;
    let logElem = document.querySelector(".stage1");
    let personID=Math.floor(Math.random()*Math.floor(100));
    let fullName=document.getElementById('sing_name').value;
    let roots=false;
    let email = document.getElementById('sing_email').value;
    let password = document.getElementById('sing_pass').value;
    let code = document.getElementById('code').value;
    let date = new Date();
    let day=date.getDay();
    if(day===0){day=7};
    let word=fullName[1];
    let code1=date.getFullYear()-date.getMonth()-date.getDate()-1 + word + String(day); //год - месяц - дата + 2 буква ФИО + строка с днем недели
if(fullName.length!==0&&email.length!==0&&password.length!==0&&code===code1){
    const body = {
      personID: `${personID}`,
      fullName: `${fullName}`,
      email: `${email}`,
      roots: `${roots}`,
      password: `${password}`
    };
    let dataAll = AddOne(url,body).then(result =>console.log(result));
    logElem.textContent = "Успешно";
    localStorage.email=email;
    localStorage.name=fullName;
    localStorage.personID=personID;
    document.location.href = "mainUser.html";
    }
  else {
    logElem.textContent = "Ошибка";
  }
};



var log = document.getElementById('login');
    log.onclick = function getData() {
    let url=`http://localhost:3000/main`;
    let dataAll = GetAll(url).then(result =>comparison(result));
};

function comparison(result){
  let count = result.length;
  let email = document.getElementById('mail').value;
  let password = document.getElementById('pass').value;
  let logElem = document.querySelector(".stage");
    for(let i=0;i<count;i++){
    if(email===result[i].email && password===result[i].password){
      logElem.textContent = "Успешно";
      localStorage.email=email;
      localStorage.name=result[i].fullName;
      localStorage.personID=result[i].personID;
      if (result[i].roots==="true"){
      document.location.href = "mainAdmin.html";}
      else {document.location.href = "mainUser.html";}
    }}
if (!localStorage.email) {
  logElem.textContent = "Ошибка при входе";
};
}
