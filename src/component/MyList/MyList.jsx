import { useLoaderData } from "react-router-dom";


const MyList = () => {
    const list = useLoaderData();
 
    return (


        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Place Name</th>
                        <th>Country Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                

                    {
                        list.map(list =><tr key={list._id}>
                            <th>#</th>
                            <td>{list.tourists_spot_name}</td>
                            <td>{list.country_name}</td>
                            <td>{list.location}</td>
                            <td><button className="btn bg-lime-600 text-black">Update</button></td>
                            <td><button className="btn bg-red-700 text-black">Delete</button></td>
                        </tr> 
                        )
                    
                    }

                    
                </tbody>
            </table>
        </div>


    );
};

export default MyList;