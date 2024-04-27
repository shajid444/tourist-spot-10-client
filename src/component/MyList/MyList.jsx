import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyList = () => {
    const list = useLoaderData();

    const handleDelete = _id =>{

            console.log(_id);

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
                    method :'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });

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
                        list.map(list =><tr key={list._id}>
                            <th>#</th>
                            <td>{list.tourists_spot_name}</td>
                            <td>{list.country_name}</td>
                            <td>{list.location}</td>
                            <td><button className="btn bg-lime-600 text-black">Update</button></td>
                            <td><button
                            onClick={()=> handleDelete(list._id)} className="btn bg-red-700 text-black">Delete</button></td>
                        </tr> 
                        )
                    
                    }

                    
                </tbody>
            </table>
        </div>


    );
};

export default MyList;