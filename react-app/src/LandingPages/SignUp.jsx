import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/header";
import styled from "styled-components";
import BgImage from "../Components/bgImg";
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class SignUp extends react.Component {
  constructor(props) {
    super(props);
    this.state = { username: null, password: null };

    this.handleusername = this.handleusername.bind(this);
    this.handlepassword = this.handlepassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  NavigateVideoSearch() {
    console.log("NavigateVideoSearch");
    return (
      <Link to="/videos">
        <button className="btn btn-danger">Go to Videos</button>
      </Link>
    );
  }

  handleusername(event) {
    this.setState({ username: event.target.value });
  }

  handlepassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.year);

    fetch(
      "http://192.168.54.177:5001/sign_up/" +
        this.state.username +
        "/" +
        this.state.password,
      {
        method: "POST",
      }
    )
      .then((response) => {
        response.json().then((result) => {
          if (result["exists"] == "true") {
            this.setState({ logged_in: true });
            console.log("Logged in");
          }
        });
      })
      .catch(
        (error) => null // Handle the error response object
      );

    /*fetch('http://192.168.54.177:5001/shashank',{  //private ip of shashank's laptop
                                                        // found using some en0 command
        method: 'POST'   //post api in node's script on Shashank's laptop
        
      })
      .then((response) => {       
        response.json().then((result)=>{          
          console.log(result)            
        })
      } )
      .catch(
        error => null // Handle the error response object
      )*/

    event.preventDefault();
  }

  render() {
    const renderForm = (
      <form onSubmit={this.handleSubmit} className="form">
        <h4>Please signup to continue using...</h4>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleusername}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handlepassword}
        />
        <button className="btn btn-danger" type="submit" value="Submit">
          Sign Up
        </button>
      </form>
    );
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
          <div className="body flex column a-center j-center">
            <h1>Welcome to Netflix</h1>
            {this.state.logged_in ? this.NavigateVideoSearch() : renderForm}
          </div>
        </div>
      </Container>
    );
  }
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
    .form {
      display: grid;
      gap: 1rem;
      input {
        color: black;
        border: none;
        padding: 0.8rem;
        border-radius: 0.5rem;
        font-size: 1rem;
        border: 2px solid black;
        &:focus {
          outline: none;
        }
      }
      button {
        padding: 0.3rem 0.5rem;
        background-color: #e80919;
        border: none;
        cursor: pointer;
        color: white;
        font-weight: bolder;
        font-size: 1rem;
      }
    }
  }
`;
export default SignUp;
