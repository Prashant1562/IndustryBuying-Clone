
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AllRoutes from './Pages/AllRoutes';
// import {AdminPage} from "../src/Adminpage/adminpage"
import AdminPage from "./Adminpage/adminpage"
function App() {
  
  return (
    <div className="App">
      <AdminPage/>
      {/* <Navbar/>
    <AllRoutes/>
    <Footer/> */}
    </div>
  );
}

export default App;