import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";
import Noticias from "./Components/Noticias/Noticias";
import Contacto from "./Components/Contacto/Contacto";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Noticias />
      <Contacto />
    </>
  );
}

export default App;
