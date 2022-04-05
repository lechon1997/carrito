import { connect } from "react-redux";
import {
  removiendoProductoAction,
  removerProductoAction,
  productoRemovidoAction,
} from "../actions/carrito";

const BtnQuitarProducto = ({ producto, dispatch }) => {
  const quitarProducto = () => {
    dispatch(removiendoProductoAction());
    dispatch(removerProductoAction(producto));
    dispatch(productoRemovidoAction());
  };
  return (
    <button onClick={quitarProducto} className="btn btn-danger">
      Quitar producto
    </button>
  );
};

export default connect(null)(BtnQuitarProducto);
