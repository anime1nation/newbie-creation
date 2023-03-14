import './App.css';
import Routes from './Router';
import Footer from './component/Footer';
import Header from './component/Header';

function App() {
  return (
    <div className='APP'>
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
