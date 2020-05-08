import React, { Component } from 'react';
import "./styles/app.css";
import Navbar from "./components/Navbar";
import Search from './components/Search';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class App extends Component {
  constructor(){
    super()
    this.state = {
      loading: false,
      cities: [],
      startTown: "",
      arriveTown: "",
      startTime: "",
      flights: [],
      modal: false
    }
  }

  componentDidMount(){
    this.uploadCities("http://localhost:8000/getData")
  }

  uploadCities = (url) => {
    this.setState({loading: true})
    fetch(url)
        .then(response => response.json())
        .then(data => {
          this.setState({
            loading: false,
            cities: data
          })
        })
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]:value})
  }

  searchFlights = () => {
    this.setState({loading: true})
    const data = {
      startTown: this.state.startTown,
      arriveTown: this.state.arriveTown,
      startTime: this.state.startTime
    }
    fetch("http://localhost:8000/getData", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          flights: data
        })
        console.log(this.state.flights)
      })
  }

  checkedStartAndArriveTowns = () => {
    this.state.startTown === this.state.arriveTown ? this.checkedCities() : this.searchFlights()
  }

  checkedCities = () => {
    this.toggle()
  }

  onFocus = (e) => {
    e.target.type = "date"
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const Searching = <Search cities={this.state.cities} handleChange={this.handleChange} startTown={this.state.startTown} arriveTown={this.state.arriveTown} startTime={this.state.startTime} searchFlights={this.checkedStartAndArriveTowns} onFocus={this.onFocus} />
    return (
      <div>
        <Navbar />
        {Searching}
        <MDBContainer>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle} centered>
            <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="warning" onClick={this.toggle}>OK</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </div>
    );
  }
}

export default App;
