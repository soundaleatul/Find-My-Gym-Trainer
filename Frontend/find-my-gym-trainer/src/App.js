import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AllRoutes from './components/AllRoutes';



function App() {
  return (
    <div>
      <header className="header"><Navbar /></header>
    
      <section className="content"><AllRoutes /></section>
  
      <footer><Footer /></footer>
    </div>
  );
}


export default App;
