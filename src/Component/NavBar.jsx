import React from "react";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.conteinertitle}>
        <h1 className={style.conteinerlogo}>Soy logo</h1>
        <h1 className={style.title}>Soy NavBar</h1>
        <h1 className={style.conteinerlogo}>Soy logo</h1>
      </div>
      <div className={style.conteinerMenu}>
        <ul className={style.menu}>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Trabajos</a>
          </li>
          <li>
            <a href="#">Tecnologias</a>
          </li>
          <li>
            <a href="#">Contactenos</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
