import HomePage from './components/homePage/HomePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BestSellers from './components/bestsellers/BestSellers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/bestsellers" element={<BestSellers/>}/>
      </Routes>
    </Router>
  );
}

export default App;
