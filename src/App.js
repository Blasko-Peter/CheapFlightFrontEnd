import React, { Component } from 'react';
import "./styles/app.css";
import Navbar from "./components/Navbar";
import Search from './components/Search';

class App extends Component {
  constructor(){
    super()
    this.state = {
      loading: false,
      cities: [],
      startTown: "",
      arriveTown: "",
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
        console.log(data)
      })
  }


  render() {
    const Searching = <Search cities={this.state.cities} handleChange={this.handleChange} startTown={this.state.startTown} arriveTown={this.state.arriveTown} searchFlights={this.searchFlights} />
    console.log(this.state.startTown)
    console.log(this.state.arriveTown)
    return (
      <div>
        <Navbar />
        {Searching}
      </div>
    );
  }
}

export default App;
