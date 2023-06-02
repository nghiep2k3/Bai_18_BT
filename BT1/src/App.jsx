import './App.css';
import LoginForm from './components/Login.js';

function App() {
  return (
    <div className="App">
      <LoginForm />

      <div>
          username: admin || pass: password
      </div>
    </div>
  );
}

export default App;