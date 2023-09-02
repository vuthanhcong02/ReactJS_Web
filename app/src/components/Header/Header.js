import React from "react";
import "./Header.scss";
import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
export default function Header() {
  const [login, setLogin] = useState(true);
  return (
    <header className="header">
      <Navbar expand="lg" className="">
        <Container>
          <Navbar.Brand href="">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207"
              className="logo"
              alt=""
              width="30"
              height="30"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={NavLink}
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "black" : "",
                  fontWeight: isActive ? "bold" : "",
                })}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/dashboard"
                style={({ isActive }) => ({
                  color: isActive ? "black" : "",
                  fontWeight: isActive ? "bold" : "",
                })}
              >
                Dashboard
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/courses"
                style={({ isActive }) => ({
                  color: isActive ? "black" : "",
                  fontWeight: isActive ? "bold" : "",
                })}
              >
                Các khóa học của tôi
              </Nav.Link>
            </Nav>
            {login ? (
              <>
                <div className="d-flex align-items-center justify-content-end">
                  <div className="notification-icon">
                    <FontAwesomeIcon icon={faBell} />
                    <sup className="number-notification">2</sup>
                  </div>
                  <img
                    src="https://picsum.photos/200"
                    className="avatar"
                    alt=""
                  />
                  <DropdownButton
                    id="dropdown-item-button"
                    title="Vũ Thành Công"
                    variant="none"
                    border="none"
                  >
                    <Dropdown.Item href="#/action-1">
                      Thông tin tài khoản
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Cài đặt</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Đăng xuất</Dropdown.Item>
                  </DropdownButton>
                </div>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                    <FontAwesomeIcon icon={faUser} style={{marginRight: '5px'}}/>
                    Đăng nhập
                </Nav.Link>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
