import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({ characterUrl }) => {

    const [ character, setCharacter ] = useState({});

    useEffect(() => {
        axios.get(characterUrl)
            .then(res => setCharacter(res.data))
    }, [ characterUrl ])

    return (
        <div className="character-container">
            <img className="character-image" src={character.image} alt={`${character.name}`} />
            <span className="character-status">{character.status}</span>
            <h3 className="character-name">
                {character.name}
            </h3>
            <hr />
            <ul className="character-info">
                <li>
                    <span className="info-type">RACE:</span><br />{character.species}
                </li>
                <li>
                    <span className="info-type">ORIGIN:</span><br />{character.origin?.name}
                </li>
                <li>
                    <span className="info-type">EPISODES WHERE APPEAR:</span><br />{character.episode?.length}
                </li>    
            </ul>
        </div>
    );
};

export default ResidentInfo;