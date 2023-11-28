import React from "react";
import "./menu-header.css"
const MenuHeader = () => {

  return <ul className={"header"}>
    <li><a href="/"></a></li>
    <li><a href="products">Produtos</a></li>
    <li><a href="contact">Contato</a></li>
  </ul >
}

export default MenuHeader;