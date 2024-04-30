// import React from 'react';

import Swal from "sweetalert2";

const CountryInput = () => {

    const addCountry = event =>{
        event.preventDefault();
        const form = event.target;
        const country_name = form.country_name.value;
        const photo = form.photo.value;
        const shortDescription = form.shortDescription.value;
        

        const tspot = {photo,  country_name,shortDescription};
        console.log(tspot);

       fetch('https://assignment-10-server-livid.vercel.app/country',{
        method : 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(tspot)
       }).then(res => res.json())
       .then(data => {
        console.log(data);
        if(data.insertedId){
            // form.reset;
            Swal.fire({
                title: 'Success!',
                text: 'Country added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })

        }
       })


    }
    return (
        <form onSubmit={addCountry} >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                <div className="space-y-2 col-span-full lg:col-span-1">
                    <p className="font-medium">ADD COuntry</p>
                   
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                        <label htmlFor="country_Name" className="text-sm">country_Name</label>
                        <input id="country_Name" type="text" 
                        name="country_name" placeholder="country_Name" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    <div className="col-span-full sm:col-span-6">
                        <label htmlFor="photo_url" className="text-sm">photo url</label>
                        <input id="" type="url"
                        name="photo" placeholder="photo url" className="w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="short-description" className="text-sm">short description</label>
                        <input id="short-description" type="text" name="shortDescription" placeholder="short description" className="w-full h-20 text-center rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300" />
                    </div>

                    <div className="col-span-6">
                        <button className="btn w-full bg-lime-700 text-black ">Add Details</button>

                    </div>
                </div>
            </fieldset>
        </form>
    );
};

export default CountryInput;