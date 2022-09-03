//* data fetching bir veri kaynağına gidip bir veriyi alıp ekranda göstermek ile ilgili
// * backend verilerine ulaşmak için kullanılır.
// * sayfayı internet hızı düşükmüş gibi yükleme yapıldığını göstermek içinn F12-Network-No throttling seçeneğinden internet hızları seçilir

import React, { useEffect, useState } from 'react'

function Users() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => { //*mount anını yakalamak için kullanılır.
        //*fetch native olarak kullanılan bir kütüphanedir.kurulum yapılmasına gerek yoktur.
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))
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

export default Users