async function GetAll() {
    const url = `http://localhost:3000/products1`;
    const res = await fetch(url, {
      method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
    })
    const data = await res.json();
    return data;
  }


async function DelOne(personID) {
 const url = `http://localhost:3000/products/delete/?articul=${personID}`;
 const res = await fetch(url, {
   method: 'DELETE',
   headers: {
     'Content-Type': 'application/json',
   }
 })
  const data = await res.json();
 return data;
}


async function GetOne(personID) {
    const url = `http://localhost:3000/products/getproduct/?articul=${personID}`;
    const res = await fetch(url, {
      method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
    })
    const data = await res.json();
    return data;
  }

async function UpdateOne(personID,personID_new,fullName,email,phone,img,birthday,position,roots,password,affairs) {
    const url = `http://localhost:3000/products/update?articul=${personID}`;
    const body = {
      personID: `${personID_new}`,
      fullName: `${fullName}`,
      email: `${email}`,
      phone: `${phone}`,
      img: `${img}`,
      birthday: `${birthday}`,
      position: `${position}`,
      affairs: `${affairs}`,
      roots: `${roots}`,
      password: `${password}`
    };
  const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const data = await res.json();
    return data;
  }

async function AddOne(personID_new,fullName,email,phone,img,birthday,position,roots,password,affairs) {
const url = `http://localhost:3000/products1`;
  const body = {
    personID: `${personID_new}`,
    fullName: `${fullName}`,
    email: `${email}`,
    phone: `${phone}`,
    img: `${img}`,
    birthday: `${birthday}`,
    position: `${position}`,
    affairs: `${affairs}`,
    roots: `${roots}`,
    password: `${password}`
  };
const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
}
