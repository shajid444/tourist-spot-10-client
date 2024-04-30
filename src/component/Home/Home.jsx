import React from 'react'
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import TouristsSpot from "../TouristsSpot/TouristsSpot";
// import TouristsSpot from "../TouristsSpot/TouristsSpot";
// import { Tooltip } from 'react-tooltip'

// import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'


const Home = () => {
    const [text] = useTypewriter({
        words: ['Hello', 'From', 'Explore', 'the', 'Wonders', 'of', 'the', 'Region'],
        loop: 7,
        onLoopDone: () => console.log(`loop completed after 7 runs.`)
    })
    const places = useLoaderData();
    return (
        <div>


            <Banner> </Banner>
            <div className='App text-center text-green-700 text-2xl font-bold'>
                <span>{text}</span>
                <Cursor cursorColor='red' />
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
                {
                    places.map(place => <TouristsSpot key={place._id} place={place}></TouristsSpot>).slice(0, 6)
                }
            </div>



        </div>



    );
};

export default Home;