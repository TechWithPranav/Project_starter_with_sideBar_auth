import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
import Orders from './components/Orders/Orders';
// Import other components as needed

function App() {
  return (
    <Router>
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<MainDash />} />
              <Route path="/orders" element={<Orders />} />
              {/* Add other routes as necessary */}
              {/* <Route path="/customers" element={<Customers />} /> */}
              {/* <Route path="/products" element={<Products />} /> */}
              {/* <Route path="/analytics" element={<Analytics />} /> */}
            </Routes>
          </div>
          <RightSide />
        </div>
      </div>
    </Router>
  );
}

export default App;
