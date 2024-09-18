// import './App.css';
import FavoriteList from "../Componentes/FavoriteList"

function Dashboard() {
  return (
    <div className="Dashboard">
        <h1>Dashboard</h1>
        <FavoriteList num={1} />
    </div>
  );
}

export default Dashboard;
