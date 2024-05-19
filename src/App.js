import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ExpedientesContainer from "./components/Expedientes/ExpedientesContainer";
import ExpedientesList from "./components/Expedientes/ExpedientesList";
import ExpedienteDetail from "./components/Expediente/ExpedienteDetail";
import NoMatch from "./components/NoMatch";
import { ExpedientesProvider } from "./contexts/ExpedientesContext";
import Login from "./components/Login/Login";
import { AuthProvider } from "./contexts/AuthenticationContext";
import RequireAuth from "./utils/RequireAuth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <ExpedientesProvider>
            <Header />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <RequireAuth>
                    <ExpedientesContainer />
                  </RequireAuth>
                }
              >
                <Route
                  index
                  element={
                    <RequireAuth>
                      <ExpedientesList />
                    </RequireAuth>
                  }
                />
                <Route
                  path="expediente/:id"
                  element={
                    <RequireAuth>
                      <ExpedienteDetail />
                    </RequireAuth>
                  }
                />
                <Route path="*" element={<NoMatch />} />
              </Route>
            </Routes>
          </ExpedientesProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
