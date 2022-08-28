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

function Book({title,data : {name,page,author}, friends}) {
  console.log(friends);

  //const {name,page,author} = props.data; şeklinde props olarak gönderilenleri değişkenlere atama yapılabilir.
    return (
      <div>
        Book {title} {/*şeklide default prop kullanılabilir*/}
        <div>İsim : {name}</div>
        <div>Page : {page}</div>
        <div>Author : {author}</div>
      
      {
        friends.map((friends,i) =>(
          <div key={i}>{friends}</div>   
          //return <div key={i}>{friends}</div>   şeklindede return işlemi yapılabilirdi.       
        ))
      }
      </div>
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

