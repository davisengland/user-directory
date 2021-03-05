import './App.css';
import UserDirectory from './Components/UserDirectory'

function App() {
  return (
    <div className="App">
      <header>
        <button className='home'>Home</button>
      </header>
      <UserDirectory/>
    </div>
  );
}

export default App;
