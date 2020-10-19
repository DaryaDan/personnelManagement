async function GetAll(url1) {
  // для авторизации, для персональной страницы
    const url = url1;
    const res = await fetch(url, {
      method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
    })
    const data = await res.json();
    return data;
  }



async function DelOne(url1) {
const url = url1;
 const res = await fetch(url, {
   method: 'DELETE',
   headers: {
     'Content-Type': 'application/json',
   }
 })
  const data = await res.json();
 return data;
}


async function GetOne(url1) {
  // для получения пароля
  const url = url1;
    const res = await fetch(url, {
      method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
    })
    const data = await res.json();
    return data;
  }

async function UpdateOne(url1,body1) {
  //для редактирования персональной страницы
  const url = url1;
  const body = body1;
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

async function AddOne(url1,body1) {
//для регистрации
const url = url1;
const body = body1;
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
