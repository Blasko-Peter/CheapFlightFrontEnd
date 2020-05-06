import React from 'react';
import '../styles/search.css';
import { MDBBtn } from "mdbreact";

function Search(props) {
    const allcities = props.cities.map(city => <option key={city} value={city}>{city}</option>);
    return (
        <div id="search-container">
            <div id="cities">
                <div className="city">
                    <select name="startTown" className="browser-default custom-select" onChange={props.handleChange} value={props.startTown}>
                    <option>Choose your start city</option>
                    {allcities}
                    </select>
                </div>
                <div className="city">
                    <select name="arriveTown" className="browser-default custom-select" onChange={props.handleChange} value={props.arriveTown}>
                    <option>Choose your target city</option>
                    {allcities}
                    </select>
                </div>
            </div>
            <div id="dates">
                <div className="city">
                    <input type="date" name="startTime" value={props.startTime} onChange={props.handleChange} /> 
                </div>
            </div>
            <div id="search-button">
                <MDBBtn color="warning" onClick={props.searchFlights}>Search</MDBBtn>
            </div>
        </div>
    )
}

export default Search;