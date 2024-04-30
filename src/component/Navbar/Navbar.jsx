import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { useEffect, useState } from "react";



const Navbar = () => {
    const[theme, setTheme] = useState('light');
    // console.log(theme);
    useEffect(()=>{
        localStorage.setItem('theme', theme);
        
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    

    },[theme])
    const handleToggle = (e)=>{

        if(e.target.checked){
            setTheme('synthwave');
        }
        else{
            setTheme('light');
        }

    }
    const { logOut, user } = useAuth();
    // console.log(user);

    const navLinks = <>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to='/allTouristSpot'>All tourist spot</NavLink></li>
        <li><NavLink to='/Tourist'>Add tourist spot </NavLink></li>
        <li><NavLink to='/myList'>My List </NavLink></li>

        <li><NavLink to='/update' >Profile </NavLink></li>
        <li><NavLink  >Update Page</NavLink></li>
        <li><NavLink to='/users' >Users</NavLink></li>
        <li><NavLink to='/cinput' >Add Country</NavLink></li>




        {/* <li><NavLink to='/login' >login</NavLink></li>
        <li><NavLink  to='/register'>Register</NavLink></li>
         <li><NavLink >Added place </NavLink></li> */}

    </>




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
                <a className="btn btn-ghost text-xl text-primary">Explore the Wonders of the Region</a>
            </div>
            <div className="navbar-center hidden lg:flex ml-40">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user ? <div className="dropdown dropdown-end" >
                        <label tabIndex={0} className="btn  btn-ghost btn-circle avatar" >
                            <div className=" w-10 rounded-full ">
                                <img alt="Tailwind CSS Navbar component" src={user?.
                                    photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm btn-ghost">{user.displayName || 'name not found'}</button>
                            </li>

                        </ul>

                        <button onClick={logOut}>Log Out</button>
                    </div>


                        :
                        <Link to='/login'>
                            <button className="btn">Login</button>
                        </Link>


                }

                <label className="cursor-pointer grid place-items-center">
                    <input onChange={handleToggle} type="checkbox"  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>


            </div>
        </div>
    );
};

export default Navbar;