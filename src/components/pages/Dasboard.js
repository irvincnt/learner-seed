import React, { useState } from "react";
import Sidebar from "../ui/Sidebar";
import "../../styles/pages/dasboard.scss";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";

export default function Dasboard() {
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <>
      <Sidebar setIsActive={setIsActive} isActive={isActive} />
      <div className={`dasboard ${isActive ? "dasboard-active" : ""}`}>
        <h1>Hola, soy el dasboard</h1>
        <button onClick={handleLogout}>salir</button>
      </div>
    </>
  );
}
