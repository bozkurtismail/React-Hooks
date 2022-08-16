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

    <Book data ={book}/> 
    <Book data ={book} friends = {['Kemal','Halide''İskender']}/> 
  </div>
}

export default App;
//<Book data ={book}/> data isminde bir  property belirtilip buna karşılık olarakta book objesi gönderildi.
//propery olarak array ile çalışılmak isteniyorsa <Book data ={book} friends = {['Kemal','Halide''İskender']}/> 
//age = {39} şeklinde sayısal değer prop olarak gönderilecekse parantez içerisine alınması gerekir.