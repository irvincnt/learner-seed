import React, { useState } from "react";
import Sidebar from "../ui/Sidebar";
import "../../styles/pages/dasboard.scss";

export default function Dasboard() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <Sidebar setIsActive={setIsActive} isActive={isActive} />
      <div className={`dasboard ${isActive ? "dasboard-active" : ""}`}>
        <h1>Hola, soy el dasboard</h1>
      </div>
    </>
  );
}
