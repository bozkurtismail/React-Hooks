//*fetch fonskiyonun yaptığı işi yapan artı üzerine farklı özellikleri olan açık kaynaklı axios isminde projedir.
//*Farklarından bir tanesi başlatılmış olan bir isteği durdurulabiliniyor.Fetch kullanıldığında gelen veri json olarak parse edilmesi gerekirdi.
//*Axiosda buna gerek yok.bunu kullanabilmek için terminalden 'npm i axios' komutu ile kütüphanesi kurulması gerekir. 
import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Axios() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => { //*mount anını yakalamak için kullanılır.
      //*fetch native olarak kullanılan bir kütüphanedir.kurulum yapılmasına gerek yoktur.
      axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(()=>setLoading(false))
  }, [])
  
return (
  <div>
      <h2>Users</h2>

      {loading && <div>Yükleniyor</div>}
      <ul>
          {
              users.map((user) =>(
                  <li key={user.id}>{user.name}</li>
              ))
          }
      </ul>
  </div>
)
}


export default Axios