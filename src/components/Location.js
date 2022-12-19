import React, { useEffect, useState } from 'react';
import axios from "axios";
import ResidentInfo from './ResidentInfo';
import Pagination from './Pagination';

const LOCATIONS_END_POINT = "https://rickandmortyapi.com/api/location/"
const TOTAL_LOCATIONS = 126;

const Location = () => {

    const [ location, setLocation ] = useState({});
    const [ id, setId ] = useState("");
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ charsPerPage ] = useState(15);

    useEffect(() => {
        const random = Math.floor(Math.random() * TOTAL_LOCATIONS) + 1;
        axios.get(`${LOCATIONS_END_POINT}${random}`)
            .then(res => setLocation(res.data))
    }, []);

    const searchLocation = () => {
        axios.get(`${LOCATIONS_END_POINT}${id}`)
            .then(res => setLocation(res.data))
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            axios.get(`${LOCATIONS_END_POINT}${id}`)
                .then(res => setLocation(res.data))
        }
    }

    //Pagination
    const indexOfLastChar = currentPage * charsPerPage;
    const indexOfFirstChar = indexOfLastChar - charsPerPage;
    const currentChars = location.residents?.slice(indexOfFirstChar, indexOfLastChar);

    const paginate = (pageNumber) => {
        window.scrollTo({top:0, behavior: 'smooth'});
        setCurrentPage(pageNumber)
    };

    return (
        <div className="body-container">
            <div className="input-controls">
                <input type="text" onChange={e => setId(e.target.value)} onKeyDown={handleKeyPress} value={id} placeholder="Type the location ID" className="input-text"/>
                <button onClick={searchLocation} className="input-button">Change location</button>
            </div>
            <p className="leyend-instructions">Write down a number between 1 and 126 to look for a location</p>
            <h2 className="location-title">{location.name}</h2>
            <ul className="location-container">
                <li><b>Type:</b><br />{location.type}</li>
                <li><b>Dimension:</b><br />{location.dimension}</li>
                <li><b>Population:</b><br />{location.residents?.length}</li>
            </ul>
            <h2 className="residents-title">Residents</h2>
            <div className="residents-container">
                {currentChars?.map((locationItem) => (
                    <ResidentInfo characterUrl={locationItem} key={locationItem}/>
                ))}      
            </div>
            <Pagination charsPerPage={charsPerPage} totalChars={location.residents?.length} paginate={paginate} />
        </div>
    );
};

export default Location;