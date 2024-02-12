import { createContext, useContext, useState, useEffect } from "react";

const ExpedientesContext = createContext();

export function useExpedientes() {
  return useContext(ExpedientesContext);
}

export function ExpedientesProvider({ children }) {
  const [expedientes, setExpedientes] = useState([]);

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

  useEffect(() => {
    handleGetExpedientes();
  }, []);

  const value = { handleGetExpedientes, expedientes };

  return (
    <ExpedientesContext.Provider value={value}>
      {children}
    </ExpedientesContext.Provider>
  );
}

export default ExpedientesContext;
