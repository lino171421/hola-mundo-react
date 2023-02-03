import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import Badge from 'react-bootstrap/Badge';

function App() {
  return (
    <div className="App">
      <Header text="Galería de Imágenes con React"></Header>
      <Card url={"https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} title_image = "German shepherd" description = "El pastor alemán o alsaciano es una raza alemana de perro de trabajo de tamaño mediano a grande. La raza fue desarrollada por Max von Stephanitz utilizando varios perros pastores alemanes tradicionales de 1899. Originalmente fue criado como un perro pastor, para pastorear ovejas."></Card>
      <Card url={"https://images.pexels.com/photos/3978352/pexels-photo-3978352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} title_image="Bulldog" description="El bulldog​ o bulldog inglés es una raza de perro originaria del Reino Unido. Su ancestro, conocido como el Antiguo Bulldog Inglés, fue utilizado en peleas de perros con toros hasta mediados del siglo XVII, aunque en 1835 esta práctica fue prohibida.​ En la actualidad este perro es uno de los símbolos de Inglaterra."></Card>
      <Card url={"https://images.pexels.com/photos/2742261/pexels-photo-2742261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} title_image="Labrador Retriever" description="El Labrador Retriever o simplemente Labrador es una raza británica de perros de caza. Fue desarrollado en el Reino Unido a partir de perros de pesca importados de la colonia de Terranova, y recibió su nombre de la región de Labrador de esa colonia."></Card>
      <Footer><Badge>Razas de perros</Badge></Footer>    
    </div>
  );
}

export default App;
