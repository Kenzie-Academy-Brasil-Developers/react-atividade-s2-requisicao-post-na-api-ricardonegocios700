import "./display.css";

const Display = ({ mensagem }) => {
  return (
    <h2 id={mensagem === "Falhou" ? "red" : "green"}>
      {`Requisição ${mensagem}`}
    </h2>
  );
};

export default Display;
