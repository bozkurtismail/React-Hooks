import Author from "./components/Author";
import Book from "./components/Book";
import Colors from "./components/Colors";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Form2 from "./components/Form2";
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

    <Counter/>
    <hr/>
    <Author/>

    <hr/>
    <Colors/>

    <hr/>
    <Form/>
    <br/>

    <hr/>
    <strong>FORM 2</strong>
    <Form2/>
  </div>
}

export default App;
//<Book data ={book}/> data isminde bir  property belirtilip buna karşılık olarakta book objesi gönderildi.
//property olarak array ile çalışılmak isteniyorsa <Book data ={book} friends = {['Kemal','Halide''İskender']}/> 
//age = {39} şeklinde sayısal değer prop olarak gönderilecekse parantez içerisine alınması gerekir.