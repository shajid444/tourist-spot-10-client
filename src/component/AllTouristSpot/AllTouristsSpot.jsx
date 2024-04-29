import { useLoaderData } from "react-router-dom";
import TouristsSpot from "../TouristsSpot/TouristsSpot";


const AllTouristsSpot = () => {
    const places = useLoaderData();
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
        {
            places.map(place=> <TouristsSpot key={place._id} place={place}></TouristsSpot> )
        }
        </div>
    );
};

export default AllTouristsSpot;