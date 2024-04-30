// import React from 'react';

const CountryCard = ({country}) => {
    const {  photo,  country_name,  shortDescription } = country;
    return (
        <div className="card w-96 mb-6 glass">
            <figure><img src={photo}alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{country_name}</h2>
                <p>{shortDescription}</p>

            </div>
        </div>
    );
};

export default CountryCard;