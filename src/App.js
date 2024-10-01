import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <div style={{display: 'flex', width: '100%', height: '99.6vh'}}>
        <div style={{display: 'flex', flexDirection: 'column', width: '50%', placeContent: 'center', alignItems: 'center'}}>
          <div style={{textAlign: 'left'}}>
            <h1>Renan Gama</h1>
            <h2>Estudante de Medicina - UNR</h2>
          </div>
        </div>
        <div style={{width: '50%', height: '100%'}}>
          <img style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top'}} src="./profile_photo.jpg"/>
        </div>
      </div>
    </div>
  );
}

export default App;
