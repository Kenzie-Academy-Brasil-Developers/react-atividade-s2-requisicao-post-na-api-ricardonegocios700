import "./App.css";
import { useState } from "react";
import Login from "./pages/Login/login.jsx";
import Display from "./pages/Display/display.jsx";

function App() {
  const [mensagem, setMensagem] = useState("");
  return (
    <div className="App">
      <Login setMensagem={setMensagem} />
      {mensagem && <Display mensagem={mensagem} />}
    </div>
  );
}

export default App;
