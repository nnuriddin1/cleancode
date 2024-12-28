import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Mobile from './components/Mobile';
import Navbar from './components/Navbar';
import Popular from './components/Popular';
import Restaurant from './components/Restaurant';
import Saying from './components/Saying';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Popular/>
     <Home/>
     <Restaurant/>
     <Mobile/>
     <Saying/>
     <Subscribe/>
     <Footer/>
    </div>
  );
}

export default App;
