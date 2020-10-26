  // для авторизации, для персональной страницы
async function GetAll(url1) {
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


  // для получения пароля
  async function GetOne(url1) {
  const url = url1;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = res.json();
  return data;
}

  //для редактирования персональной страницы
async function UpdateOne(url1,body1) {
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

//для регистрации
async function AddOne(url1,body1) {
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
