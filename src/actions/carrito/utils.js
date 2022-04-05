import {
  AGREGANDO_PRODUCTO,
  AGREGAR_PRODUCTO,
  PRODUCTO_AGREGADO,
  REMOVIENDO_PRODUCTO,
  REMOVER_PRODUCTO,
  PRODUCTO_REMOVIDO,
  INCREMENTAR_CANTIDAD,
  DECREMENTAR_CANTIDAD,
  FINALIZANDO_COMPRA,
  FINALIZAR_COMPRA,
  COMPRA_FINALIZADA,
} from "../../reducers/carrito/types";

export const agregandoProducto = () => {
  return {
    type: AGREGANDO_PRODUCTO,
    payload: true,
  };
};

export const agregarProducto = (producto) => {
  return {
    type: AGREGAR_PRODUCTO,
    payload: producto,
  };
};

export const productoAgregado = () => {
  return {
    type: PRODUCTO_AGREGADO,
    payload: false,
  };
};

export const removiendoProducto = () => {
  return {
    type: REMOVIENDO_PRODUCTO,
    payload: true,
  };
};

export const removerProducto = (producto) => {
  return {
    type: REMOVER_PRODUCTO,
    payload: producto,
  };
};

export const productoRemovido = () => {
  return {
    type: PRODUCTO_REMOVIDO,
    payload: false,
  };
};

export const incrementarCantidad = (producto) => {
  return {
    type: INCREMENTAR_CANTIDAD,
    payload: producto,
  };
};

export const decrementarCantidad = (producto) => {
  return {
    type: DECREMENTAR_CANTIDAD,
    payload: producto,
  };
};

export const finalizandoCompra = () => {
  return {
    type: FINALIZANDO_COMPRA,
    payload: true,
  };
};

export const finalizarCompra = () => {
  return {
    type: FINALIZAR_COMPRA,
  };
};

export const compraFinalizada = () => {
  return {
    type: COMPRA_FINALIZADA,
    payload: false,
  };
};
