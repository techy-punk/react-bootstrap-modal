import './App.css';
import SiteModal from './component/modal/SiteModal';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React-bootstrap modal </h1>
        <h2> click on below button to launch site Modal</h2>
       <SiteModal/>
      </header>
    </div>
  );
}

export default App;
