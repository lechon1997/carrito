import ListaProductos from "./components/ListaProductos";
import Carrito from "./components/Carrito";
import { connect } from "react-redux";

import "./styles/global.css";

function App({ dispatch }) {
  return (
    <div className="pantalla-principal d-flex">
      <Carrito />
      <ListaProductos />
    </div>
  );
}

export default connect(null)(App);
