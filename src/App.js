import React, { Component } from 'react';
import "./styles/app.css";
import Navbar from "./components/Navbar";
import Search from './components/Search';

class App extends Component {
  constructor(){
    super()
    this.state = {
      loading: false,
      cities: []
    }
  }

  componentDidMount(){
    this.uploadCities("http://localhost:8000/getAllCities")
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

  render() {
    const Searching = <Search cities={this.state.cities} />
    return (
      <div>
        <Navbar />
        {Searching}
      </div>
    );
  }
}

export default App;
