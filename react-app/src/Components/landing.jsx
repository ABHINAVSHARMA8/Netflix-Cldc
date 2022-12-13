import { useState } from "react";
import Header from "./header";
import styled from "styled-components";
import BgImage from "./bgImg";

function Landing() {
  return (
    <Container>
      <BgImage />
      <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
          crossOrigin="anonymous"
        ></script>
      <div className="content">
        <Header />
        {/* Main Page */}
      
      <div className="body flex column a-center j-center">
      
          <h1> About</h1>
          <div className="list-group">
          <ul>
              <li className="list-group-item">New Users to Sign up</li>
              <li className="list-group-item">Log In to proceed to Videos</li>
              <li className="list-group-item">Stream videos by first searching them by name</li>
              <li className="list-group-item"> Only existing users can change password</li>
          </ul>
          </div>
          <h1>Team Members</h1>
          <ul>
              <li className="list-group-item">Udit Bhati</li>
              <li className="list-group-item">Abhinav Sharma</li>
              <li className="list-group-item">Mihir Bhatia</li>
              <li className="list-group-item">Meghna</li>
          </ul>
          
        
        </div>       
      </div>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  h1 {
    font-size: 3rem;
    color: white;
  }
  h4 {
    font-size: 1.5rem;
    color: white;
  }
  .content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: grid;
    grid-template-rows: 10vh 90vh;

  }
  button {
    padding: 0.2rem 0.5rem;
  }
  .body {
    gap: 1rem;
    .text {
      text-align: center;
    }
  }
  .list{
    font-color:white
  }
  .list-group-item{
    background-color: rgba(0, 0, 0, 0);
    color: white;
    font-size: 1.5rem;

  }
`;
export default Landing;
