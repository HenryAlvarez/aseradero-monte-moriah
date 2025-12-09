import logo from './logo.svg';
import portada from './assets/portada.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img width={600} src={portada} alt='Aseradero Monte Moriah' />
        <p>
          Bienvenidos, a <code>Aseradero Monte Moriah</code>, pagina en contruccion.
        </p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
