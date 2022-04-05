import { OBTENER_PRODUCTOS_API } from "../../reducers/productos/types";
import getProductos from "../../api/productos";

export const obtenerProductosApi = () => ({
  type: OBTENER_PRODUCTOS_API,
  payload: getProductos(),
});
