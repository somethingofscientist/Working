import Navbar from './Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/login' element={<Login />} /> 
        <Route path='/register' element={<Register />} /> 
        <Route path='*' element={<PageNotFound />} /> 
      </Routes>
    </>
  );
}

export default App;
