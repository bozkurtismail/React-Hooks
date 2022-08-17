import Book from "./components/Book";
import Header from "./components/Header";
import User from "./components/User";

const book = {
  name : "Kuyucaklı Yusuf",
  page : 120,
  author : "Sabahattin Ali"
}

function App() {
  return  <div>Merhaba
    <Header/>
    <User name="Ahmet" city="Adana" age = {39}/>

    <Book data ={book} title = "Kisi"/> 
    <Book 
        data = {{
          name : "Kuyucaklı Yusuf", //şekliden props olarak gönderilecek props tanımlaması yapılabilir.
          page : 120,
          author : "Sabahattin Ali"
    }}/>
    <Book data ={book} friends = {['Kemal','Halide','İskender']}/> 
  </div>
}

export default App;
//<Book data ={book}/> data isminde bir  property belirtilip buna karşılık olarakta book objesi gönderildi.
//property olarak array ile çalışılmak isteniyorsa <Book data ={book} friends = {['Kemal','Halide''İskender']}/> 
//age = {39} şeklinde sayısal değer prop olarak gönderilecekse parantez içerisine alınması gerekir.