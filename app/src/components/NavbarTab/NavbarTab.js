import React from "react";
import { Nav } from "react-bootstrap";
import './NavbarTab.scss'
import { Link } from "react-router-dom";
export default function NavbarTab() {
  return (
    <>
      <Nav defaultActiveKey="/course" variant="underline">
        <Nav.Item>
          <Nav.Link eventKey="/course" activekey="/course">
                Course
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/notification" activekey="/notification">Thông báo chung</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/document" activekey="/document">Tài liệu</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
