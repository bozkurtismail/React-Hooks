import React from 'react'

/*function Book(props) {
  return (
    <div>
      Book
      <div>İsim : {props.data.name}</div>
      <div>Page : {props.data.page}</div>
      <div>Author : {props.data.author}</div>
    </div>
  )
}*/

/*function Book({data}) {
    return (
      <div>
        Book
        <div>İsim : {data.name}</div>
        <div>Page : {data.page}</div>
        <div>Author : {data.author}</div>
      </div>
    )
}*/

function Book({data : {name,page,author}, friends}) {
  console.log(friends);
    return (
      <div>
        Book
        <div>İsim : {name}</div>
        <div>Page : {page}</div>
        <div>Author : {author}</div>
      </div>
      {
        friends.map((friends) =>(
          <div></div>
          
        ))
      } arrr
    )
}
export default Book

/*Bir bileşene props olarak array veya obje veri tipinin gönderilmesi hakkında bilgiler aktarılmaktadır.
Her seferinde props.data.name yazılmak istenmiyorsa props alma yeri {data}  şeklinde yazılabilir.
propsu almanın bir başka yolu function Book(props) { altında 
  const data = props.data ile eşitleme yapılarak obje içerisindeki fieldler data.name şeklinde çağrılabilinir.Yada
  const {name,page,author} = props.data şeklindede eşitleme yapılabilir.Genellikle function Book({data}) { şeklinde
    kullanım daha fazla  
  */