import HomePage from "./components/HomePage";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
