import React, { Component } from 'react';
import "./styles/app.css";
import Navbar from "./components/Navbar";
import Search from './components/Search';
import Modal from "./components/Modal";
import Table from "./components/Table";

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
    fetch("http://localhost:8000/selenium", {
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

  newSearch = () => {
    this.setState({
      flights: [],
      startTown: "",
      arriveTown: "",
      startTime: ""
    })
  }
 
  render() {
    const Searching = <Search cities={this.state.cities} handleChange={this.handleChange} startTown={this.state.startTown} arriveTown={this.state.arriveTown} startTime={this.state.startTime} searchFlights={this.checkedStartAndArriveTowns} onFocus={this.onFocus} />
    const FlightsTable = <Table flights={this.state.flights} newSearch={this.newSearch} startTown={this.state.startTown} arriveTown={this.state.arriveTown} startTime={this.state.startTime} />
    const FlightsSearch = this.state.flights.length === 0 ? Searching : FlightsTable
    return (
      <div>
        <Navbar />
        {FlightsSearch}
        <Modal modal={this.state.modal} toggle={this.toggle} />
      </div>
    );
  }
}

export default App;
