import { useContext } from 'react';
import { FaRegUserCircle, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Pages/Provider/AuthProvider';
import logo from '../../assets/logo.png'


const Navbar = () => {

    const { user, logout } = useContext(AuthContext)
    console.log(user)

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => {
                console.error(error.message)
            })
    }




    return (
        <div className="flex justify-center">
            <div className="navbar fixed text-white z-50 p-8 container mx-auto max-w-[1240px]">
                <div className="navbar-start">

                    {/* Mobile responsive */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" text-white menu menu-compact dropdown-content mt-3 p-5 shadow bg-base-100 rounded-box w-52 grid gap-3">
                            <Link to="/">Home</Link>
                            <Link to="/all-toys">All Toys</Link>
                            <Link to="/blog">Blogs</Link>
                            {
                                user
                                    ?
                                    <>
                                        <li>My Toys</li>
                                        <Link to="/add-toys">Add A Toy</Link>
                                        <li onClick={handleLogout} className='cursor-pointer'>Log out</li>
                                    </>
                                    :
                                    <Link to="/login" className='flex items-center gap-2'><FaUser></FaUser> login</Link>
                            }
                        </ul>
                    </div>
                    <Link to="/"><img className="w-20" src={logo} alt="" /></Link>
                </div>

                {/* Desktop responsive */}

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8">
                        <Link to="/">Home</Link>
                        <Link to="/all-toys">All Toys</Link>
                        <Link to="/blog">Blogs</Link>
                        {
                            user
                                ?
                                <>
                                    <li>My Toys</li>
                                    <Link to="/add-toys">Add A Toy</Link>
                                    <li onClick={handleLogout} className='cursor-pointer'>Log out</li>
                                </>
                                :
                                <Link to="/login" className='flex items-center gap-2'><FaUser></FaUser> login</Link>
                        }
                    </ul>
                </div>
                <div className="navbar-end">

                    <div className="dropdown dropdown-end dropdown-hover">
                        <label tabIndex={0} className="text-4xl">
                            {
                                user
                                    ?
                                    <img className=' w-10 rounded-full' src={user?.photoURL} alt="" />
                                    :
                                    <FaRegUserCircle></FaRegUserCircle>
                            }
                        </label>
                        {
                            user &&
                            <ul tabIndex={0} className="dropdown-content menu p-5 shadow bg-base-100 text-white rounded-box w-52">
                                <li>{user?.displayName}</li>
                            </ul>

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;