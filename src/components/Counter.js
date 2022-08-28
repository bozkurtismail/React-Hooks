import React, { useEffect, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(5)
    //count değişkenin  değerini değiştirmek için setCount fonksiyonu kullanılır.
    //isim olarak standart gereği setCount diye yazıldı istenirse const [count, x] = useState(0); şeklindede yazılabilirdi.
    //useState(0) ise değişkenin ilk initialize değeridir.Stateler tanımlanırken sadece number value türünde yapmakla
    //sınırlı değildir. 
    //Not:chromde F12 sonrası sağda ... noktaya tıklanıp moreTools-Rendering -Paint flashing ile ekranda render 
    //yerler görülebilir.
    //Not:Component üzerindeki herhangi bir state güncellendiği anda bunu useEffect() hooku ile yakalayabiliriz.
   
    useEffect(() => {
     console.log('Bir state değişti'); // Burdaki useEffect hooku sayfada herhangi bir component render olduğu anda useEffect içerisindeki fonksiyon log basar.s
    })

    //useEffect(() => {},[]) componen ilk kez mount edildiği anda useEffectin ilk parametresi fonksiyon,ikinci parametresi
    //bir array girilyor.Eğer arrayın içi boşsa component mount edildiği anda yakalar.Örneğin sayfa ilk açıldığı anda kullanıcıların
    //bir liste görmesi isteniyorsa kullanıcı listesi bir backende bağlı olacağı için hemen burada veri kaynağına istek atılıp
    //gelen sonuç ekranda gösterilebilir.
    useEffect(() => {
      console.log('Componen mount edildi.'); // Burdaki useEffect hooku sayfada herhangi bir component render olduğu anda useEffect içerisindeki fonksiyon log basar.s
     },[])

     useEffect(() => {
      console.log('Count state değişti'); // Burdaki useEffect hooku sayfada herhangi bir component render olduğu anda useEffect içerisindeki fonksiyon log basar.s
     },[count]) //Arrayin içerisindeki state değiştiği anda useEffect içerisindeki fonksiyon tetiklenecektir.

     useEffect(() => {
      console.log('Count ve amount state değişti'); 
     },[count,amount]) //hem count hemde amount statelereine göre tetiklenir.


     useEffect(() => {
     let interval = setInterval(() => {
        console.log("interval") //statin unmount edildiği anda çalışıyor
        setCount((prev) => prev+1)
      }, 1000);
      
      return () =>clearInterval(interval);
     },[]) 
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+amount)}>Artır</button>  
      <button onClick={()=>setCount(prev =>prev-amount)}>Azalt</button>
      {//countun ifade ettiği son değeri doğrudan count an almak yerine setCount fonksiyonu callBack özelliği sayesinde
      //bir önceki state setCount(prev =>prev-amount)}  şeklinde prev ile alabiliyoruz.
      }

      <hr/>
      Artirma: +{amount}
      <br/>
      <button onClick={()=>setAmount(1)}>+1</button>
      <button onClick={()=>setAmount(3)}>+3</button>
      <button onClick={()=>setAmount(10)}>+10</button>



    </div>
  );
}

export default Counter
