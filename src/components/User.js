import React from 'react'

function User(props) {
  return (
    <div>
     User
     <div>İsim : {props.name}</div> 
     <div>Yaş : {props.age}</div> 
     <div>Şehir {props.city}</div>
     <hr></hr>
    </div>
  )
}

export default User

/*Değişkenlere static şekilde atama yapmak yerine componenti kullanan modul parametreleri dinamik şekilde göndererek kullanabilir.*/


