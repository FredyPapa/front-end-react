import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import buySuccess from "../../../imagenes/comprar-papa-web.jpg";

const Success = () => {
  //
  const {clearAllItems} = useContext(CartContext);
  //
  return (
    <div>
      <div>
          <h3 align="center">Felicitaciones...</h3>
          <p align="center">Su compra fue realizada con éxito...</p>
          <p align="center">
            <img alt="Compra exitosa" src={buySuccess} />;
          </p>
          <p align="center">
            <NavLink to="/inicio">
              <Button className="btn btn-success" onClick={()=>clearAllItems()}>Volver</Button>
            </NavLink>
          </p>
      </div>
  </div>
  );
};

export default Success;
