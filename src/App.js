import HomePage from './components/homePage/HomePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NewIn from './components/newIn/NewIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/new-in" element={<NewIn/>}/>
      </Routes>
    </Router>
  );
}

export default App;
