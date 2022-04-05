import BtnAgregarProducto from "./BtnAgregarProducto";
import BtnQuitarProducto from "./BtnQuitarProducto";
import { connect } from "react-redux";
const Producto = ({ producto, carrito }) => {
  return (
    <div className="card width-18rem ms-3 h-75">
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text m-0">Precio:{" $" + producto.precio}</p>
        <p className="card-text">Stock:{" " + producto.stock}</p>
        <div className="h-75 d-flex align-items-center">
          {carrito.filter((p) => p === producto).length === 0 ? (
            <BtnAgregarProducto producto={producto} />
          ) : (
            <BtnQuitarProducto producto={producto} />
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  carrito: state.carrito.carrito,
});
export default connect(mapStateToProps)(Producto);
