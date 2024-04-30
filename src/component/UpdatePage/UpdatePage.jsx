import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatePage = () => {
    // ----------------------------------------------------
const list = useLoaderData();
const {_id, photo, tourists_spot_name, country_name, location, totalVisitor, shortDescription, avgCost, seasonality, travelTime} = list;
    const updateTouristsSpot = event => {
        event.preventDefault();
        const form = event.target;

        const photo = form.photo.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_name = form.country_name.value;
        const location = form.location.value;
        const totalVisitor = form.totalVisitor.value;
        const shortDescription = form.shortDescription.value;
        const avgCost = form.avgCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        // const username = form.username.value;
        // const email = form.email.value;
        const updtaedPlace = { photo, tourists_spot_name, country_name, location, totalVisitor, shortDescription, avgCost, seasonality, travelTime};

       
        console.log(updtaedPlace);

        fetch(`https://assignment-10-server-livid.vercel.app/place/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updtaedPlace)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // form.reset;
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourist place updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })


    }





    // ---------------------------------------------------
    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
            <h1 >{tourists_spot_name}</h1>
            <form onSubmit={updateTouristsSpot} className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Give the info which you want to update</p>

                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-6">
                            <label htmlFor="photo_url" className="text-sm">photo url</label>
                            <input id="" type="url"
                                name="photo" defaultValue={photo} placeholder="photo url" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="tourists_spot_name" className="text-sm">tourists_spot_name</label>
                            <input id="" type="text"
                                name="tourists_spot_name" defaultValue={tourists_spot_name} placeholder="tourists_spot_name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="country_Name" className="text-sm">country_Name</label>
                            <input id="country_Name" type="text"
                                name="country_name" defaultValue={country_name}  placeholder="country_Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="Loction" className="text-sm">Loction</label>
                            <input id="Loction" type="text"
                                name="location" defaultValue={location} placeholder="Loction" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="TotalVisitorsPerYear" className="text-sm">Total Visitors Per Year</label>
                            <input id="TotalVisitorsPerYear" type="text" name="totalVisitor" defaultValue={totalVisitor} placeholder="Total Visitors Per Year" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="short-description" className="text-sm">short description</label>
                            <input id="short-description" type="text" name="shortDescription" defaultValue={shortDescription} placeholder="short description" className="w-full h-20 text-center rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="average_cost" className="text-sm">average_cost</label>
                            <input id="average_cost" type="text" name="avgCost" defaultValue={avgCost} placeholder="average_cost" className="w-full rounded-md text-center focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="seasonality" className="text-sm">seasonality</label>
                            <input id="seasonality" type="text"
                                name="seasonality" defaultValue={seasonality} placeholder="seasonality" className="w-full text-center rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="travel_time " className="text-sm">travel_time </label>
                            <input id="travel_time " type="text"
                                name="travelTime" defaultValue={travelTime} placeholder="travel_time" className="text-center w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-6">

                            <button className="btn w-full bg-lime-700 text-black ">Update</button>

                        </div>

                    </div>

                </fieldset>

            </form>
        </section>
    );
};

export default UpdatePage;