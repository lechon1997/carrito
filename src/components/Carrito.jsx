import { connect } from "react-redux";
import ItemCarrito from "./ItemCarrito";
import BtnFinalizarCompra from "./BtnFinalizarCompra";
const Carrito = ({ carrito }) => {
  return (
    <div className="w-25 max-width-20  bg-primary d-flex flex-column align-items-center">
      <div className="estilos-carrito">
        {carrito.map((p) => (
          <ItemCarrito carrito={carrito} producto={p} />
        ))}
      </div>
      <div className="estilos-btn-finalizar-compra d-flex justify-content-center align-items-end pb-5">
        <BtnFinalizarCompra />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  carrito: state.carrito.carrito,
});

export default connect(mapStateToProps)(Carrito);
