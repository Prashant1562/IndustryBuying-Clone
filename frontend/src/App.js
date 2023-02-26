import { AdminPage } from './Adminpage/adminpage';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AllRoutes from './Pages/AllRoutes';
function App() {
  
  return (
    <div className="App">
      {/* <AdminPage/> */}
      <Navbar/>
    <AllRoutes/>
    <Footer/>
    </div>
  );
}

export default App;