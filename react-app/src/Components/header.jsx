import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  return (
    <Container className="flex a-center j-between">
      <div className="logo">
        <img src={logo} alt="logo" onClick={() => navigate("/")} />
      </div>
      <button onClick={() => navigate("/log_in")}> LogIn </button>
      <button onClick={() => navigate("/sign_up")}> SignUp </button>
      <button onClick={() => navigate("/recommendation")}> Recommendation </button>
      <button onClick={() => navigate("/change_password")}> Change Password </button>
    </Container>
  );
}
const Container = styled.div`
  padding: 0 4rem;
  .logo {
    img {
      height: 3rem;
      cursor: pointer;
    }
  }
  button {
    padding: 0.3rem 0.2rem;
    background-color: #e91929;
    color: #fff;
    cursor: pointer;
    border-radius: 0.3rem;
    font-size: 1.2rem;
  }
`;

export default Header;
