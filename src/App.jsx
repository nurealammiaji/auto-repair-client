import { Outlet } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
    <NavBar></NavBar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
