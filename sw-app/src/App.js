import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Landing from './screens/Landing'
import Planets from './screens/Planets'
import Planet from './screens/Planet'

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path='/' exact element={ <Landing /> } />
          <Route path='/planets' exact element={ <Planets /> } />
          <Route path='/planets/:id' exact element={ <Planet /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
