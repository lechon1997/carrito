import { connect } from "react-redux";
import {
  agregandoProductoAction,
  agregarProductoAction,
  productoAgregadoAction,
} from "../actions/carrito";
const BtnAgregarProducto = ({ producto, dispatch }) => {
  const agregarProducto = () => {
    console.log(producto.stock);
    const p2 = producto;
    p2.cantidad = 1;
    dispatch(agregandoProductoAction());
    dispatch(agregarProductoAction(p2));
    dispatch(productoAgregadoAction());
  };
  return (
    <div>
      {producto.stock === 0 ? (
        <button type="button" class="btn btn-primary" disabled>
          Producto sin stock
        </button>
      ) : (
        <button onClick={agregarProducto} className="btn btn-primary">
          Agregar al carrito
        </button>
      )}
    </div>
  );
};

export default connect(null)(BtnAgregarProducto);
