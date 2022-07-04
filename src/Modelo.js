import './App.css';
import { LoginDashboard } from './components/main/LoginDashboard';
import { RegisterDashboard } from './components/main/RegisterDashboard';
import { RegisterDashboardMember } from './components/main/RegisterDashboardMember';
import { Home} from './components/main/Home';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';


function Modelo() {
  return (
    <div>
      <Header/>
      <Home />
      <Footer />
    </div>
  );
}

export default Modelo;
