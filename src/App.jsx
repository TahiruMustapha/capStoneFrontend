import "./App.css";
import Navbar from "./components/Navbar";
import TableList from "./components/TableList";
import ModalForm from "../src/components/Modalform";
import { useState } from "react";
import { createClient, updateClient, deleteClient } from "./services/clientApi";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [searchTerm, setSearchTerm] = useState("");
  const [clientData, setClientData] = useState(null);

  const handleOpen = (mode, client) => {
    setClientData(client);
    setModalMode(mode);
    setIsOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteClient(id);
      window.location.reload(); // Simplest way to refresh for now, or fetch data again
    } catch (error) {
      console.error("Error deleting client:", error);
    }
  };

  const handleSubmit = async (newClientData) => {
    if (modalMode === "add") {
      try {
        await createClient(newClientData);
        console.log("Client added");
        setIsOpen(false);
         window.location.reload(); 
      } catch (error) {
        console.error("Error adding client:", error);
      }
    } else {
      try {
        await updateClient(clientData.id, newClientData);
        console.log("Client updated");
        setIsOpen(false);
         window.location.reload(); 
      } catch (error) {
        console.error("Error updating client:", error);
      }
    }
  };

  return (
    <>
      {/* ++ py-5 px-5 */}
      <div className="py-5 px-5 ">
        <Navbar onOpen={() => handleOpen("add")} onSearch={setSearchTerm} />
        <TableList onOpen={handleOpen} searchTerm={searchTerm} onDelete={handleDelete}/>
        <ModalForm
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          mode={modalMode}
          onSubmit={handleSubmit}
          clientData={clientData}
        />
      </div>
    </>
  );
}

export default App;
