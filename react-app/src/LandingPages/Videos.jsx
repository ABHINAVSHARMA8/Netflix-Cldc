import react from "react";
import Header from "../Components/header";
import styled from 'styled-components';
import BgImage from "../Components/bgImg";

class Videos extends react.Component {
  constructor(props) {
    super(props);

    this.state = { name: null, src: null, rcvd: false };

    this.handlename = this.handlename.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.playVideo = this.playVideo.bind(this);
  }

  playVideo() {
    // return <video  loop autoPlay="" muted ><source src={this.state.src} type="video/mp4"/>Your browser does not support the video tag.</video>

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

  handlename(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.year);

    fetch("http://192.168.58.151:3001/videos/" + this.state.name, {
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
    const rendemForm = (
      <form className="form" onSubmit={this.handleSubmit}>
            
              <input
                type="text"
                value={this.state.name}
                onChange={this.handlename}
              />
            <button className="btn btn-danger" type="submit" value="Submit">Submit</button>
          </form>
    );
    return (
      <Container>
        <BgImage />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        <div className="content">
        <Header />
        <div className="body flex column a-center j-center">
        <h1>Videos: </h1>
          {rendemForm}
          {this.state.rcvd ? this.playVideo() : <h1>Video Unavaialble</h1>}
        </div>
        </div>
        
      </Container>
    );
  }
}
const Container = styled.div`
position: relative;
h1{
  font-size: 3rem;
  color: white;
  
}
h4{
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
button{
  padding: 0.2rem 0.5rem;
}
.body{
  gap: 1rem;
  .text{
    text-align: center;
  }
  .form{
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

export default Videos;
