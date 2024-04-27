import { Link } from "react-router-dom";


const TouristsSpot = ({place}) => {
    const {photo, tourists_spot_name, country_name, location, totalVisitor, shortDescription, avgCost, seasonality, travelTime, username, email} = place;
    // const places = useLoaderData();
    return (
        <div>
            {/*  a. image
 b. tourists_spot_name
 c. average_cost
 d. totaVisitorsPerYear
 e. travel_time
 f. seasonality */}
 {/* <h className='text-3xl'>places : </h> */}
            <div className="lg:max-w-xs md:max-w-xs sm:w-full lg:mx-auto mt-7 mb-7 rounded-md shadow-2xl shadow-slate-400 dark:bg-gray-50 dark:text-gray-800 " data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{tourists_spot_name}</h2>
                        <p className="dark:text-gray-800">Avarage cost : {avgCost}</p>
                        <p>Total Visitor :{totalVisitor} </p>

                        <div className="flex gap-5">
                            <p>Travel Time :{travelTime}</p>
                            <p>Seasonality :{seasonality} </p>
                            
                        </div>
                    </div>
                    <Link to='/viewDetails' >

                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">View Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default TouristsSpot;