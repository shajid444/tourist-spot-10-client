// import React from 'react';

// import { useLoaderData } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import CountryCard from "./CountryCard";

const Country = () => {
    const countries = useLoaderData();
    console.log(countries[0]);
    return (
        <div>
             <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ml-7">
                {
                    countries.map(country => <CountryCard key={country._id} country={country}></CountryCard>).slice(0, 6)
                }
            </div>
        </div>
    );
};

export default Country;