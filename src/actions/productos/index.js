import { obtenerProductosApi } from "./utils";

export function obtenerProductosApiAction() {
  return (dispatch) => {
    dispatch(obtenerProductosApi());
  };
}
