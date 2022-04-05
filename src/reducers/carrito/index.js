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
  COMPRA_FINALIZADA,
  FINALIZAR_COMPRA,
} from "./types";

const initialState = {
  carrito: [],
  agregandoProducto: false,
  removiendoProducto: false,
  finalizandoCompra: false,
  productos: [
    {
      id: 1,
      nombre: "celular 1",
      descripcion: "descripcion 1",
      precio: 5000,
      stock: 10,
    },
    {
      id: 2,
      nombre: "celular 2",
      descripcion: "descripcion 2",
      precio: 8500,
      stock: 10,
    },
    {
      id: 3,
      nombre: "celular 3",
      descripcion: "descripcion 3",
      precio: 7000,
      stock: 10,
    },
    {
      id: 4,
      nombre: "celular 4",
      descripcion: "descripcion 4",
      precio: 6000,
      stock: 10,
    },
  ],
};

const carritoReducer = (state = initialState, action) => {
  switch (action.type) {
    case AGREGANDO_PRODUCTO:
      return {
        ...state,
        agregandoProducto: action.payload,
      };

    case AGREGAR_PRODUCTO:
      return {
        ...state,
        carrito: [...state.carrito, action.payload],
      };

    case PRODUCTO_AGREGADO:
      return {
        ...state,
        agregandoProducto: action.payload,
      };

    case REMOVIENDO_PRODUCTO:
      return {
        ...state,
        removiendoProducto: true,
      };

    case REMOVER_PRODUCTO:
      console.log(action.payload);
      return {
        ...state,
        carrito: state.carrito.filter((p) => p.id !== action.payload.id),
      };

    case PRODUCTO_REMOVIDO:
      return {
        ...state,
        removiendoProducto: false,
      };

    case INCREMENTAR_CANTIDAD:
      return {
        ...state,
        carrito: [
          ...state.carrito.map((p) => {
            if (p.id === action.payload.id) {
              p.cantidad += 1;
              return p;
            }

            return p;
          }),
        ],
      };

    case DECREMENTAR_CANTIDAD:
      return {
        ...state,
        carrito: [
          ...state.carrito.map((p) => {
            if (p.id === action.payload.id) {
              p.cantidad -= 1;
              return p;
            }

            return p;
          }),
        ],
      };

    case FINALIZANDO_COMPRA:
      return {
        ...state,
        finalizandoCompra: action.payload,
      };

    case FINALIZAR_COMPRA:
      return {
        ...state,
        productos: [
          ...state.productos.map((p) => {
            if (p === state.carrito.filter((p2) => p2 === p)[0]) {
              p.stock -= p.cantidad;
              return p;
            }
            return p;
          }),
        ],
        carrito: [],
      };
    case COMPRA_FINALIZADA:
      return {
        ...state,
        finalizandoCompra: action.payload,
      };

    default:
      return state;
  }
};

export default carritoReducer;
