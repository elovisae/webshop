import HomePage from './components/homePage/HomePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BestSellers from './components/bestsellers/BestSellers';
import ErrorPage from './components/404';
import ShopAll from './components/shopAll/ShopAll';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/bestsellers" element={<BestSellers/>}/>
        <Route path="/shop/all" element={<ShopAll/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
