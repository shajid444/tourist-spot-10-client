
// import { Helmet } from 'react-helmet-async';

import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const details = useLoaderData();
    const {_id, photo, tourists_spot_name, country_name, location, totalVisitor, shortDescription, avgCost, seasonality, travelTime, username, email} = details;
    return (
        <div className="p-4 w-3/4 mx-auto shadow-xl dark:bg-gray-50 dark:text-gray-800">
            {/* <Helmet>
                <title>Details</title>
            </Helmet> */}
            <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center">
                    <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">Location : {location}</a>
                </div>

            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={photo} alt="" className="block object-cover object-center w-full rounded-md h-96 dark:bg-gray-500" />
                    <div className="flex items-center text-base justify-around">
                        <span>Place :{tourists_spot_name} </span>
                        <span>Country :{country_name} </span>
                        <span>Total visitor :{totalVisitor}</span>
                    </div>
                </div>
                <div className="text-center">
                   Description : {shortDescription}
                </div>
                <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-xl font-semibold dark:text-violet-600"></h3>
                    </a>
                    <p className="leading-snug dark:text-gray-600"></p>

                    <div>
                        <h5 className=" text-sky-600 font-semibold">Other info :</h5>
                        <p>
                            #Average Cost :{avgCost}
                        </p>
                        <p>
                            #Seasonality : {seasonality}
                        </p>
                        <p>
                            #Travel Time : {travelTime}
                        </p>
                    </div>





                </div>
            </div>
        </div>
    );
};

export default ViewDetails;