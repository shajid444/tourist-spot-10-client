import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hook/useAuth";


const MyList = () => {
    const {user} = useAuth();
    const loadedList = useLoaderData();
    const load = loadedList.filter(load =>load.email== user.email);
    const[list, setList] = useState(load);
   
    // console.log(user.email);
    // console.log(list[0].email);
    // console.log(load);

    const handleDelete = _id => {
      

        // console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                console.log('delete confirmed');
                fetch(`http://localhost:5000/place/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = list.filter(li => li._id !== _id);
                            setList(remaining);

                        }
                    })
            }
        });
    }


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
                        list.map(list => <tr key={list._id}>
                            <th>#</th>
                            <td>{list.tourists_spot_name}</td>
                            <td>{list.country_name}</td>
                            <td>{list.location}</td>
                            <td>
                                <Link to={`/updatepage/${list._id}`}>
                                    <button className="btn bg-lime-600 text-black">Update</button>
                                </Link>

                            </td>
                            <td><button
                                onClick={() => handleDelete(list._id)} className="btn bg-red-700 text-black">Delete</button></td>
                        </tr>
                        )

                    }


                </tbody>
            </table>
        </div>


    );
};

export default MyList;