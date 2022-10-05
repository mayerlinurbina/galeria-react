import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Header from './components/header.jsx';
import Card from './components/card.jsx';
import Footer from './components/footer.jsx';


function App() {
  const titulo = "Galeria de imagenes con React"
  const data = [
    {
      img: "https://www.cugat.cl/wp-content/uploads/2021/04/2542010000000-2-300x300.jpg",
      titulo: "Kiwi",
      desc: "Fruta acida"
    },

    {
      img: "https://www.elhuertoemporio.cl/wp-content/uploads/Naranja.png",
      titulo: "Naranja",
      desc: "Fruta dulce"
    },

    {
      img: "https://www.delcaribe.cl/wp-content/uploads/2019/01/2_arandano_azul.jpg",
      titulo: "Arandano",
      desc: "Fruta suave"
    }
  ]
  return (
    <div className="App">
      <Header titulo={titulo}></Header>

      <section className="container galeria-container">
        <div className="row ">
          <div className="col-sm-12 col-lg-4">
          <Card contenido={data[0]}></Card>
          </div>

          <div className="col-sm-12 col-lg-4">
          <Card contenido={data[1]}></Card>
          </div>

          <div className="col-sm-12 col-lg-4">
          <Card contenido={data[2]}></Card>
          </div>
        </div>
      </section>

      

     
      
      
      <Footer></Footer>
    </div>
  );
}

export default App;
