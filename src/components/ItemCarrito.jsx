import {
  incrementarCantidadAction,
  decrementarCantidadAction,
} from "../actions/carrito";
import { connect } from "react-redux";

const ItemCarrito = ({ carrito, producto, dispatch }) => {
  const cantidad = carrito.filter((p) => p === producto)[0].cantidad;

  const incrementarCantidad = () => {
    if (cantidad < producto.stock) {
      dispatch(incrementarCantidadAction(producto));
    }
  };

  const decrementarCantidad = () => {
    if (cantidad > 1) {
      dispatch(decrementarCantidadAction(producto));
    }
  };

  return (
    <div class="card width-18rem mt-2">
      <div class="card-body">
        <h5 class="card-title">{producto.nombre}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{"$" + producto.precio}</h6>
        <p class="card-text">{producto.descripcion}</p>
        <div className="d-flex">
          <p className="m-0 me-3">Cantidad </p>
          <div className="w-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="currentColor"
              class="bi bi-dash-circle"
              viewBox="0 0 22 22"
              onClick={decrementarCantidad}
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
            {cantidad}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="currentColor"
              class="bi bi-plus-circle ms-1"
              viewBox="0 0 22 22"
              onClick={incrementarCantidad}
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null)(ItemCarrito);
