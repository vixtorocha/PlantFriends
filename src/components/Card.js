import React from 'react';
import './Card.css';

function Card({ name, link }) {
    return (
        <div className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow-3'>
            <img src={link} alt={name} />
            <div>
                <h2>{name}</h2>
                <p>Descrição</p>
            </div>

        </div>
    );
}

export default Card;