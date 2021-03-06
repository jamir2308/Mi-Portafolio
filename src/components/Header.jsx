import React from "react";
import { Nav } from "react-bootstrap";

export default function Header() {
  return (
    <div
      style={{
        position: "fixed",
        top: "0px",
        backgroundColor: "moccasin",
        width: "100%",
        zIndex: "5",
        paddingRight: "40px",
      }}
    >
      <Nav defaultActiveKey="/home" as="ul" className="justify-content-end">
        <Nav.Item as="li">
          <Nav.Link href="#welcome-section">Sobre mi</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="#skill">Habilidades</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="#proyecto">proyectos</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
