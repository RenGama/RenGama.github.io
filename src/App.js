import "./App.css";
import { BiPlusMedical } from "react-icons/bi";

function App() {
  return (
    <div className="App">
      <main className="container">
        <section className="card">
          <div className="icon-container">
            <BiPlusMedical className="icon" />
          </div>

          <h1 className="name">Dr. Renan Gama</h1>

          <p className="subtitle">
            Prática médica guiada pela ciência, pela ética e pelo respeito ao paciente.
          </p>

          <div className="divider" />

          <p className="description">
            Medicina responsável, precisa e humana.
          </p>

          <p className="coming-soon">
            Mais informações em breve.
          </p>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} Renan Gama
        </footer>
      </main>
    </div>
  );
}

export default App;
