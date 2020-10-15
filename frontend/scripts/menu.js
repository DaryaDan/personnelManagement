document.onclick = function change() {
  if (event.target.className !== 'p_menu' && event.target.className !== 'link' && event.target.className !== 'nav-toggle expanded' && event.target.className !== 'nav-toggle-bar') {
    document.querySelector('.nav-toggle').classList.remove('expanded');
    document.querySelector('#nav').classList.remove('expanded');
  }
};

(function menu() {
  const hamburger = {
    nav: document.querySelector('#nav'),
    navToggle: document.querySelector('.nav-toggle'),

    initialize() {
      this.navToggle.addEventListener('click',
        () => { this.toggle(); });
    },

    toggle() {
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    },
  };

  hamburger.initialize();
}());

// -----------------Delete-------------
function deleteInform() {
  document.getElementById('butExit').textContent = 'Вход';
  localStorage.removeItem('email');
  localStorage.removeItem('name');
  document.getElementById('autorization').textContent = 'Вход';
  document.getElementById('but-autorization').classList.remove('button-input-autorization');
}

// -----------------login-------------
if (localStorage.getItem('email') !== null) {
  document.getElementById('but-autorization').onclick = '';
  document.getElementById('autorization').textContent = localStorage.name;
  document.getElementById('but-autorization').classList.add('button-input-autorization');
  document.getElementById('butExit').textContent = 'Выход';
  document.getElementById('butExit').onclick = function remove() {
    deleteInform();
  };
  document.getElementById('but-autorization').onclick = function remove() {
    deleteInform();
  };
}


// (function getData() {
//   const personID = '55';
//   let personID_new="230";
//   let personID_new_add="230";
//   let fullName="1";
//   let email="1";
//   let phone="1";
//   let img="1";
//   var sports = ['футбол', 'бейсбол'];
//   var total = sports.push('американский футбол', 'плавание');
//   let birthday='1969-12-31';
//   let position="1";
//   let roots="true";
//   let password="1";
//   let affairs=sports;
//   let data2 = AddOne(personID_new,fullName,email,phone,img,birthday,position,roots,password,affairs).then(result => console.log(result)).then(GetAll().then(result => console.log(result)));
//   //let data1 = GetAll().then(result => console.log(result));
//   // let data2 = GetOne(personID).then(result => console.log(result));
//   // let data3 = DelOne(personID).then(result => console.log(result));
//   // let data4 = UpdateOne(personID,personID_new,fullName,email,phone,img,birthday,position,roots,password,affairs).then(result => console.log(result));
// //let data5 = AddOne(personID_new_add,fullName,email,phone,img,birthday,position,roots,password,affairs).then(result => console.log(result));
// })();
