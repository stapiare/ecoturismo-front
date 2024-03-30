import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './containers/pages/Login';
import Singin from './containers/pages/Singin';
import Request from './containers/pages/Request';


function App() {
  return (
    <Router>
      <Routes>
         {/* RUTAS */}
        <Route exact path='/' element={<Login />} />
        <Route exact path='/singin' element={<Singin />} />
        <Route exact path='/request' element={<Request/>} />
      </Routes>
    </Router>
  );
}

export default App;
