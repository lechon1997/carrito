import {
  agregandoProducto,
  agregarProducto,
  productoAgregado,
  removiendoProducto,
  removerProducto,
  productoRemovido,
  incrementarCantidad,
  decrementarCantidad,
  finalizandoCompra,
  finalizarCompra,
  compraFinalizada,
} from "./utils";

export function agregandoProductoAction() {
  return (dispatch) => {
    dispatch(agregandoProducto());
  };
}

export function agregarProductoAction(producto) {
  return (dispatch) => {
    dispatch(agregarProducto(producto));
  };
}

export function productoAgregadoAction() {
  return (dispatch) => {
    dispatch(productoAgregado());
  };
}

export function removiendoProductoAction() {
  return (dispatch) => {
    dispatch(removiendoProducto());
  };
}

export function removerProductoAction(producto) {
  return (dispatch) => {
    dispatch(removerProducto(producto));
  };
}

export function productoRemovidoAction() {
  return (dispatch) => {
    dispatch(productoRemovido());
  };
}

export function incrementarCantidadAction(producto) {
  return async (dispatch) => {
    dispatch(incrementarCantidad(producto));
  };
}

export function decrementarCantidadAction(producto) {
  return async (dispatch) => {
    dispatch(decrementarCantidad(producto));
  };
}

export function finalizandoCompraAction() {
  return (dispatch) => {
    dispatch(finalizandoCompra());
  };
}

export function finalizarCompraAction() {
  return (dispatch) => {
    dispatch(finalizarCompra());
  };
}

export function compraFinalizadaAction() {
  return (dispatch) => {
    dispatch(compraFinalizada());
  };
}
