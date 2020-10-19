(function aboutMe() {
  document.getElementById('name').innerHTML = localStorage.name;
  document.getElementById('email').innerHTML = localStorage.email;
let urlDescription=`http://localhost:3000/description`;
let dataAll = GetAll(urlDescription).then(result =>comparison(result));
})();

function comparison(result){
let count = result.length;
let parentEl = document.getElementById("photo"),
     img = document.createElement("IMG");
for(let i=0;i<count;i++){
if(Number(localStorage.personID)===result[i].descriptionID){
  if (result[i].birthday!==undefined){
    let k=result[i].birthday.slice(8, 10) + "." + result[i].birthday.slice(5, 7) + "." + result[i].birthday.slice(0, 4);
    document.getElementById('birthday').innerHTML = k;
  }
  if (result[i].phone!==undefined){
  document.getElementById('phone').innerHTML = result[i].phone;
}
  if (result[i].img!==undefined){
  img.src = result[i].img;
  parentEl.appendChild(img);
}
else {
  img.src = "https://morane.by/images/work1.png";
  parentEl.appendChild(img);
}
  if (result[i].position!==undefined){
  document.getElementById('category').innerHTML = result[i].position;
}
}
else {
  img.src = "https://morane.by/images/work1.png";
  parentEl.appendChild(img);
}
}
}


console.log(localStorage.personID);
let urlPass = `http://localhost:3000/main/getproduct/?personID=${localStorage.personID}`;
console.log(urlPass);
let dataGetPassword = GetOne(urlPass).then(result =>console.log(result));
// let dataGetPassword = DelOne(urlPass).then(result =>console.log(result));


let a = document.getElementById('change');
    a.onclick = function editData() {
    let urlMain=`http://localhost:3000/main`;
    let urlDescription=`http://localhost:3000/description`;

    let fullName=document.getElementById('changeName').value;
    let roots=false;
    let email = document.getElementById('changeEmail').value;

    let password;
    let urlPass = `http://localhost:3000/main/getproduct/?articul=${localStorage.personID}`;
    let dataGetPassword = GetOne(urlPass).then(result =>{
      let password=result.password;
      console.log(result);
      alert("aaaaaa");
    });
      console.log(password);

      let phone=document.getElementById('changePhone').value;
      let img = document.getElementById('changePhoto').value;
      let position=document.getElementById('changePosition').value;
      let birthday = document.getElementById('changeBirthday').value;

    // const bodyMain = {
    //   personID: `${localStorage.personID}`,
    //   fullName: `${fullName}`,
    //   email: `${email}`,
    //   roots: `${roots}`,
    //   password: `${password}`
    // };
    // const bodyDescription = {
    //   descriptionID: `${localStorage.personID}`,
    //   phone: `${phone}`,
    //   img: `${img}`,
    //   birthday: `${birthday}`,
    //   position: `${position}`
    // };
    // let dataAllMain = UpdateOne(urlMain,bodyMain).then(result =>console.log(result));
    // let dataAllDescription = UpdateOne(urlDescription,bodyDescription).then(result =>console.log(result));
    // localStorage.email=email;
    // localStorage.name=fullName;

  }
