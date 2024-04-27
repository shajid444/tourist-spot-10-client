import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import TouristsSpot from "../TouristsSpot/TouristsSpot";
// import TouristsSpot from "../TouristsSpot/TouristsSpot";


const Home = () => {
    const places =  useLoaderData();
    return (
        <div>
            <Banner> </Banner>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {
                places.map(place=> <TouristsSpot key={place._id} place={place}></TouristsSpot> )
            }
            </div>
            
            

        </div>



    );
};

export default Home;