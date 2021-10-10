import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name,region,population,capital,flag} = props.country;
    return (
        <div class="country">
            <h4>This is {name}</h4>
            <img src={flag}/>
            <p><small>Region:{region} </small></p>
            <p>Capital is: {capital} Population: {population}</p>
        </div>
    );
};

export default Country;
