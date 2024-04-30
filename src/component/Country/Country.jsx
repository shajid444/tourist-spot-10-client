// import React from 'react';

// import { useLoaderData } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";
import CountryCard from "./CountryCard";
import { useEffect, useState } from "react";

const Country = () => {
    // 
    // const countries = useLoaderData();
    const [countries, setCountries] =useState([]);
    useEffect(()=>{
        fetch('https://assignment-10-server-livid.vercel.app/country')
        .then(result=>result.json())
        .then(data=> setCountries(data))
    },[])
    console.log({countries});
    return (
        <div>
            {/* <h1>country start</h1> */}
             <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ml-7">
                {
                    countries.map(country => <CountryCard key={country._id} country={country}></CountryCard>)
                }
            </div>
            {/* <h1>country ends</h1> */}
        </div>
    );
};

export default Country;