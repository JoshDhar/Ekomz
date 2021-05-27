import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <NavLink to="/login" className="nav-link">
            Sign In
          </NavLink>
        ) : (
          <NavLink to="/login" className="nav-link disabled">
            Sign In
          </NavLink>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <NavLink to="/shipping" className="nav-link">
            Shipping
          </NavLink>
        ) : (
          <NavLink to="/shipping" className="nav-link disabled">
            Shipping
          </NavLink>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <NavLink to="/payment" className="nav-link">
            Payment
          </NavLink>
        ) : (
          <NavLink to="/payment" className="nav-link disabled">
            Payment
          </NavLink>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <NavLink to="/placeorder" className="nav-link">
            Place Order
          </NavLink>
        ) : (
          <NavLink to="/placeorder" className="nav-link disabled">
            Place Order
          </NavLink>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
