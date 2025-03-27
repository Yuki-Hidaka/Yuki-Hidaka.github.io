//import logo from './logo.svg';
import './App.css';

function App() {

  const frontEndTechs = [
    {
      name: 'HTML',
      description: '学習中',
    },
    {
      name: 'CSS',
      description: '学習中',
    },
    {
      name: 'JavaScript',
      description: '学習中',
    },
  ];

  const programingTechs = [
    {
      name: 'VB.net',
      description: '学習中',
    },
    {
      name: 'Python',
      description: '学習中',
    },
    {
      name: 'JavaScript',
      description: '学習中',
    },
  ];

  const frameworkTechs = [
    {
      name: 'React',
      description: '学習中',
    },
    {
      name: 'flet',
      description: '学習中',
    },
    {
      name: 'Selenium',
      description: '学習中',
    },
  ];

  return (
    <div className="App">

      <h1>学んだ技術に関するアウトプットスペース</h1>
      <h2>技術スタック</h2>
      <h3>フロントエンド技術</h3>

      <div className="feTech-list">
        {frontEndTechs.map((tech, index) => (
        <div key={index} className="feTech-item">
          <p>{tech.name}: {tech.description}</p>
        </div>
        ))}
      </div>

      <h3>プログラミング言語</h3>

      <div className="pgTech-list">
        {programingTechs.map((tech, index) => (
        <div key={index} className="pgTech-item">
          <p>{tech.name}: {tech.description}</p>
        </div>
        ))}
      </div>

      <h3>フレームワーク</h3>

      <div className="fwTech-list">
        {frameworkTechs.map((tech, index) => (
        <div key={index} className="fwTech-item">
          <p>{tech.name}: {tech.description}</p>
        </div>
        ))}
      </div>

    </div>
  );
}

export default App;
