import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hook/useAuth";



const Navbar = () => {

    const navLinks = <>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to='/allTouristSpot'>All tourist spot</NavLink></li>
        <li><NavLink to='/Tourist'>Add tourist spot </NavLink></li>
        <li><NavLink  to='/myList'>My List </NavLink></li>

        <li><NavLink to='/update' >Profile </NavLink></li>
        <li><NavLink  >Update Page</NavLink></li>
        
       
       
       
        {/* <li><NavLink to='/login' >login</NavLink></li>
        <li><NavLink  to='/register'>Register</NavLink></li>
         <li><NavLink >Added place </NavLink></li> */}

    </>
    
    const { logOut, user } = useAuth();
    

    return (
        <div className="navbar bg-base-100 mb-8">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
            </div>
            <a className="btn btn-ghost text-xl text-primary">Residence Royale</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {navLinks}
            </ul>
        </div>
        <div className="navbar-end ">
            {
                user?  <div className="dropdown dropdown-end" >
               <label  tabIndex={0} className="btn  btn-ghost btn-circle avatar" >
               <div className=" w-10 rounded-full ">
                    <img  alt="Tailwind CSS Navbar component" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" } />
                </div>
               </label>
               <ul tabIndex={0} className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <button className="btn btn-sm btn-ghost">{user?.displayName || 'name not found'}</button>
                </li>

               </ul>

                <button onClick={logOut}>Log Out</button>
            </div>
            

                    :
                    <Link to='/login'>
                        <button  className="btn">Login</button>
                    </Link>


            }


        </div>
    </div>
    );
};

export default Navbar;