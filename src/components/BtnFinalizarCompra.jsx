import { connect } from "react-redux";
import {
  finalizandoCompraAction,
  finalizarCompraAction,
  compraFinalizadaAction,
} from "../actions/carrito";

const BtnFinalizarCompra = ({ dispatch }) => {
  const finalizarCompra = () => {
    dispatch(finalizandoCompraAction());
    dispatch(finalizarCompraAction());
    dispatch(compraFinalizadaAction());
  };
  return (
    <button onClick={finalizarCompra} className="btn btn-success w-75">
      Finalizar compra
    </button>
  );
};

export default connect()(BtnFinalizarCompra);
