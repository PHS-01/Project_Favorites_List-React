import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Pages/Home.js';
import { MyProvider } from './Componentes/MyProvider.js';
import FavoriteList, { List } from './Componentes/FavoriteList.js';

function App() {
  return (
    <div className="App">
    <Router>
      <MyProvider>
      <nav className="Navbar">
      <div className="navbar-left">
        <div className="logo">MPP</div>
      </div>
      <div className="navbar-center">
        <Link exact to="/">Home</Link>
        <Link exact to="/dashboard">Dashboard</Link>
      </div>
      <div className="navbar-right">
          <FavoriteList />
      </div>
    </nav> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={
          <div className="Dashboard">
            <h1>Dashboard</h1>
            <List />
          </div>
        } />
      </Routes>
      <footer class="footer">
        <div class="footer-section">
          <h3>Sobre Nós</h3>
          <p>Seu site de favoritos, onde você pode salvar e gerenciar suas listas de itens preferidos.</p>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 MPP. Todos os direitos reservados.</p>
        </div>
      </footer>
      </MyProvider>
    </Router>
    </div>
  );
}

export default App;
