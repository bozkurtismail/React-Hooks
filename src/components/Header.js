import React from 'react'


//değişken render etmek için javascript kodu içerisinde değişken süslü parantez içersinde kullanılır.
const name = "Mehmet"
let surname = "Alakuş"
const isLoggendIn = true
function Header() {
  return (
  <React.Fragment>
    <div>
      <p>Test</p>
      {name}{surname}

      {
        isLoggendIn ? (
          <div>Hoşgeldin {name}</div>
        ) : (
          <a href=''>Giriş yapı</a>
        )}
    </div>
    <div>
      <h1>Header</h1>
      </div>
    </React.Fragment>
  )
}

export default Header

//iki div alt alta kullanıldığında iki div başka bir div ile sarmallanmadı yada reactin bize sağlamış olduğu
//<>
//</>
//fragment ifadesi kullanılabilir
/*kullanım şekli 
   <>
    <div>
      <p>Test</p>
    </div>
    <div>
      <h1>Header</h1>
      </div>
    </>
    şeklindedir.Bir başka kullanım şekli  
    <React.Fragment>
    <div>
      <p>Test</p>
    </div>
    <div>
      <h1>Header</h1>
      </div>
    </React.Fragment>
    şeklindedir.
    */

   /*PROPS denilen konu aslında Property yani  özellik olarak tanımı yapılır.
   Bir componenti ilk kez render ederken onun görünümünü sağlayacak olan bilgileri Componen oluştururken
   kolaylık sağlayacak kod rfce(React Function Export Component) */ 
