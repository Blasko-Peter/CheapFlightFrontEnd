import React from 'react';
import '../styles/search.css';
import { MDBBtn } from "mdbreact";

function Search(props) {
    const allcities = props.cities.map(city => <option key={city} value={city}>{city}</option>);
    return (
        <div id="search-container">
            <div id="cities">
                <div className="city">
                    <select className="browser-default custom-select">
                    <option>Choose your start city</option>
                    {allcities}
                    </select>
                </div>
                <div className="city">
                    <select className="browser-default custom-select">
                    <option>Choose your target city</option>
                    {allcities}
                    </select>
                </div>
            </div>
            <div id="dates">
                <div className="city">
                    <select className="browser-default custom-select">
                    <option>Choose your start city</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    </select>
                </div>
                <div className="city">
                    <select className="browser-default custom-select">
                    <option>Choose your target city</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    </select>
                </div>
            </div>
            <div id="search-button">
                <MDBBtn color="warning">Search</MDBBtn>
            </div>
        </div>
    )
}

export default Search;