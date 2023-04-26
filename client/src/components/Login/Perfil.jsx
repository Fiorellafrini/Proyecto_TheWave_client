import React from 'react' 
import perfil from './perfil.png'
import jwt from 'jwt-decode'





function Perfil() {
  let token = window.localStorage.getItem("login");
  
  const user  = jwt(token);



  return (
    <div>
      <img src={user.photo?user.photo : perfil} alt="foto" />
      <h2 >{user.name}</h2>
      <h2 >{user.lastName}</h2>
      <h2 >{user.email}</h2>
    </div>
  );
}

export default Perfil

