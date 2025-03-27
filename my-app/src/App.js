import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
  <h1>学んだ技術に関するアウトプットスペース</h1>
  <h2>技術スタック</h2>
  <h3>フロントエンド技術</h3>
  <ul>
    <li>HTML : 学習中</li>
    <li>CSS : 学習中</li>
  </ul>
  <h3>プログラミング言語</h3>
  <ul>
    <li>VB.net : 学習中</li>
    <li>Python : 学習中</li>
  </ul>
  <h3>フレームワーク</h3>
  <ul>
    <li>Selenium : 学習中</li>
    <li>flet : 学習中</li>
  </ul>
</body>
    </div>
  );
}

export default App;
