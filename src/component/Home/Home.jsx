import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import TouristsSpot from "../TouristsSpot/TouristsSpot";
// import TouristsSpot from "../TouristsSpot/TouristsSpot";
// import { Tooltip } from 'react-tooltip'


const Home = () => {
    const places = useLoaderData();
    return (
        <div>
           
            
            <Banner> </Banner>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
                {
                    places.map(place => <TouristsSpot key={place._id} place={place}></TouristsSpot>).slice(0, 6)
                }
            </div>



        </div>



    );
};

export default Home;