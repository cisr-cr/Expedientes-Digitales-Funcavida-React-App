import { createContext, useContext, useState, useEffect } from "react";

const ExpedientesContext = createContext();

export function useExpedientes() {
  return useContext(ExpedientesContext);
}

export function ExpedientesProvider({ children }) {
  const [expedientes, setExpedientes] = useState([]);
  const [clickedExpediente, setClickedExpediente] = useState();

  async function handleGetExpedientes() {
    try {
      const response = await fetch("http://localhost:9000/api/expedientes");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setExpedientes(data);
      console.log("Expedientes loaded:", data);
    } catch (error) {
      console.error("Error fetching expedientes:", error.message);
    }
  }

  async function handleClickExpediente(id) {
    // Find the expediente with the given id
    const tmpClickedExpediente = expedientes.find(
      (expediente) => expediente._id === id
    );

    if (tmpClickedExpediente) {
      console.log("Expediente clicked:", tmpClickedExpediente);
      setClickedExpediente(tmpClickedExpediente);
    } else {
      console.warn("Expediente not found for id:", id);

      try {
        // Fetch expediente by id from the server
        const response = await fetch(
          `http://localhost:9000/api/expediente/${id}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const expedienteData = await response.json();

        console.log("Expediente clicked:", expedienteData);
        setClickedExpediente(expedienteData);
      } catch (error) {
        console.error("Error fetching expediente:", error.message);
      }
    }
  }

  useEffect(() => {
    let abortController = new AbortController();
    handleGetExpedientes();
    return () => {
      abortController.abort();
    };
  }, []);

  const value = {
    handleGetExpedientes,
    handleClickExpediente,
    expedientes,
    clickedExpediente,
  };

  return (
    <ExpedientesContext.Provider value={value}>
      {children}
    </ExpedientesContext.Provider>
  );
}

export default ExpedientesContext;
