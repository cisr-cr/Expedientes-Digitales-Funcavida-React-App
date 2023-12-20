import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ExpedientesContainer from "./components/Expedientes/ExpedientesContainer";
import ExpedientesList from "./components/Expedientes/ExpedientesList";
import ExpedienteDetail from "./components/Expediente/ExpedienteDetail";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ExpedientesContainer />}>
            <Route index element={<ExpedientesList />} />
            <Route path="expediente/:id" element={<ExpedienteDetail />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
