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
  </div>
}

export default App;
