import logo from './logo.svg';
import portada from './assets/portada.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img width={600} src={portada} alt='Aseradero Monte Moria' />
        <p>
          Bienvenidos, a <code>Aseradero Monte Moria</code>, pagina en contruccion.
        </p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
