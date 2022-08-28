import React from 'react'
import Proptypes from "prop-types"

function User(title,props) {
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


User.proTypes = {
  title : Proptypes.string,
  name : Proptypes.string.isRequired, // name propun isRequired ile zorunlu alan olması belirtilir.
  age  : Proptypes.number,
  city : Proptypes.string
}

User.defaultProps = {
  title : "Kisi",
}
export default User

/*Değişkenlere static şekilde atama yapmak yerine componenti kullanan modul parametreleri dinamik şekilde göndererek kullanabilir.*/
/*PropTypes React bileşenleri üzerine gönderilen proplara veri tipi tanımı yapılması hakkında bilgi verilmektedir.
function User ({name,age,city}) şeklinde componente gönderilen parametrelere tip kısıtlaması
User.prototype = {
  name : Proptypes.string,
  age  : Proptypes.number,
  city : Proptypes.string
} şeklinde yapılır.
function User ({data}) tipinde prop gönderimi yapılırsa
User.prototype = {
 data: Proptypes.exact({
  name : Proptypes.string,
  age  : Proptypes.number,
  city : Proptypes.string
 }),
 friend : Proptypes.array
 data tanımlaması şekildeki gibi yapılar.
  }
*/

/*default props olarak gönderilen title parametresine değişken setlenmeden gönderilirse varsayılan bir ataması
yapılarak her daim kullanılabilir.*/



