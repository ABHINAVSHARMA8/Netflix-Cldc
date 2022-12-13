import react from "react";
import Header from "../Components/header";
import BgImage from "../Components/bgImg";
import styled from "styled-components";

class Recommendation extends react.Component {
  constructor(props) {
    super(props);

    this.state = { name: null, src: null, rcvd: false };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.playVideo = this.playVideo.bind(this);
  }

  playVideo() {
    return (
      <iframe
        width="560"
        height="315"
        src={this.state.src}
        frameborder="0"
        allowFullScreen
      ></iframe>
    );
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.year);

    fetch("http://192.168.58.151:3001/recommendation/", {
      method: "POST",
    })
      .then((response) => {
        response.json().then((result) => {
          this.setState({ src: result["src"], rcvd: true });
        });
      })
      .catch(
        (error) => null // Handle the error response object
      );

    event.preventDefault();
  }

  render() {
    return (
      <Container>
        <BgImage />
        <div className="content">
          <Header />
          <div className="body flex column a-center j-center">
            <h4>Video: </h4>
            {this.state.rcvd ? this.playVideo() : <h4>Video Unavaialble</h4>}
            <form onSubmit={this.handleSubmit} className="form">
              <button className="btn btn-danger" type="submit" value="Submit">
                Submit
              </button>
            </form>
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
export default Recommendation;
