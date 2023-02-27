import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import Nav from "react-bootstrap/Nav";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <h1>Cocktail World</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Nav variant='pills' defaultActiveKey='/home'>
            <Nav.Item>
              <Nav.Link href='/home'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='#' onClick={handleClick}>
                Logout
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {/* <Link to='/home'>Home</Link>
          <a href='#' onClick={handleClick}>
            Logout
          </a> */}
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Nav variant='pills' defaultActiveKey='/login'>
            <Nav.Item>
              <Nav.Link href='/login'>Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/signup' eventKey='link-1'>
                Sign Up
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {/* <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link> */}
        </div>
      )}
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
