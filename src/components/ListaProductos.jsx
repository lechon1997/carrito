import { connect } from "react-redux";
import Producto from "./Producto";
const ListaProductos = ({ productos }) => {
  console.log(productos);
  return (
    <div className="d-flex w-75 h-50 container pt-3">
      {productos.map((prod) => (
        <Producto key={prod.id} producto={prod} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  productos: state.carrito.productos,
});

export default connect(mapStateToProps)(ListaProductos);
