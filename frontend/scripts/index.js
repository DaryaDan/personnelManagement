(function getData() {
  const personID = '55';
  let personID_new="230";
  let personID_new_add="230";
  let fullName="1";
  let email="1";
  let phone="1";
  let img="1";
  var sports = ['футбол', 'бейсбол'];
  var total = sports.push('американский футбол', 'плавание');
  let birthday='1969-12-31';
  let position="1";
  let roots="true";
  let password="1";
  let affairs=sports;
  let data2 = AddOne(personID_new,fullName,email,phone,img,birthday,position,roots,password,affairs).then(result => console.log(result)).then(GetAll().then(result => console.log(result)));

  // let data1 = GetAll().then(result => console.log(result));
  // let data2 = GetOne(personID).then(result => console.log(result));
  // let data3 = DelOne(personID).then(result => console.log(result));
  // let data4 = UpdateOne(personID,personID_new,fullName,email,phone,img,birthday,position,roots,password,affairs).then(result => console.log(result));
  // let data5 = AddOne(personID_new_add,fullName,email,phone,img,birthday,position,roots,password,affairs).then(result => console.log(result));
})();
