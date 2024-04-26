

const TouristsSpotInput = () => {
    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
        <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Give the info about your tourist place</p>
				<p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
			</div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="tourists_spot_name" className="text-sm">tourists_spot_name</label>
                        <input id="" type="text" placeholder="tourists_spot_name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="country_Name" className="text-sm">country_Name</label>
                        <input id="country_Name" type="text" placeholder="country_Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="Loction" className="text-sm">Loction</label>
                        <input id="Loction" type="text" placeholder="Loction" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="TotalVisitorsPerYear" className="text-sm">Total Visitors Per Year</label>
                        <input id="TotalVisitorsPerYear" type="text" placeholder="Total Visitors Per Year" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="short-description" className="text-sm">short description</label>
                        <input id="short-description" type="text" placeholder="short description" className="w-full h-20 text-center rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                        <label htmlFor="average_cost" className="text-sm">average_cost</label>
                        <input id="average_cost" type="text" placeholder="average_cost" className="w-full rounded-md text-center focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                        <label htmlFor="seasonality" className="text-sm">seasonality</label>
                        <input id="seasonality" type="text" placeholder="seasonality" className="w-full text-center rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    <div className="col-span-full sm:col-span-2">
                        <label htmlFor="travel_time " className="text-sm">travel_time </label>
                        <input id="travel_time " type="text" placeholder="travel_time" className="text-center w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                
                </div>
            </fieldset>
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                <div className="space-y-2 col-span-full lg:col-span-1">
                    <p className="font-medium">Profile</p>
                    <p className="text-xs">Adipisci fuga autem eum!</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full sm:col-span-3">
                        <label htmlFor="username" className="text-sm">Username</label>
                        <input id="username" type="text" placeholder="Username" className="w-full rounded-md text-center focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    <div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Email</label>
					<input id="email" type="email" placeholder="Email" className="w-full text-center rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
                   
                <button className="btn  w-4/5">ADD Details</button>
                </div>
            </fieldset>
        </form>
    </section>
    );
};

export default TouristsSpotInput;