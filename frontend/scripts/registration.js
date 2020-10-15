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

var a = document.getElementById('login');
    a.onclick = function getData() {
  let dataAll = GetAll().then(result =>comparison(result));
};

function comparison(result){
  let count = result.length;
  let email = document.getElementById('mail').value;
  let password = document.getElementById('pass').value;
  let logElem = document.querySelector(".stage");
  let dataEmail = GetAll().then(result => {
    for(let i=0;i<count;i++){
    if(email===result[i].email && password===result[i].password){
      logElem.textContent = "Успешно";
      localStorage.email=email;
      localStorage.name=result[i].fullName;
      if (result[i].roots==="true"){
      document.location.href = "mainAdmin.html";}
      else {document.location.href = "mainUser.html";}
    }}
});
if (!localStorage.email) {
  logElem.textContent = "Ошибка при входе";
};
}
