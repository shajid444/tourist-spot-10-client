import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";


const Update = () => {
    const {user} = useAuth();
    console.log(user);
    return (

        
        <div className=" flex justify-center items-center">
            <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                <img src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" } alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">{user?.displayName || 'name not found'}</h2>
                        <p className="px-5 text-xs sm:text-base dark:text-gray-600">{user?.email ||"email not found"}</p>
                    </div>

                    <Link to='/update'>Update profile</Link>
                </div>
            </div>
        </div>
    );
};

export default Update;