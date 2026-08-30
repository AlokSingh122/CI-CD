import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Docker Deployment</h1>
        <p className="App-description">
          This is a modern React application successfully containerized with Docker and deployed to AWS EC2. Experience seamless CI/CD integration with GitHub Actions for automated builds and deployments.
        </p>
        <div className="App-features">
          <div className="feature-item">🐳 Docker Containerized</div>
          <div className="feature-item">⚡ Fast Deployment</div>
          <div className="feature-item">🚀 AWS EC2 Ready</div>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
