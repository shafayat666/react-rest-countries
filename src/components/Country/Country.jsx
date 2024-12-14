import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{ color: visited ? 'Purple' : 'white' }}>Name: {name.common}</h3>
            <img src={flags.png} />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>

            <button onClick={() => handleVisitedCountry(country)}>Mark visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
            {visited ? "I have visited this country" : "I want to visit"}
        </div>
    );
};

export default Country;