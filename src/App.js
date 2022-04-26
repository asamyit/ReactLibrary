import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FuctionCom from './components/FuctionCom';
import NavBar from './components/NavBar';
import activity from './assets/activity.gif'


function App() {
  
  return (
    <div className="App">
      <img src={activity} alt='img'/>
      <NavBar /> 
      <FuctionCom />
    </div>
  );
}

export default App;
