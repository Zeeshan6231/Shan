import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>welcome!</h1>
        <p><strong>currently learning:</strong></p>
        <ul>
          <li>✅ html</li>
          <lI>✅ css</lI>
          <li>✅ Javascript</li>
          <li>✅ Reacts</li>
          <li>✅ node.js and experess</li>
          <li>✅ MONGODB</li>
          </ul>
          <p><em>Every expert was once a beginner</em></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > Explore My journey
        </a>
      </header>
    </div>
  );
}

export default App;