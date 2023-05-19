import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Navbar = () => {
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
                            <li>All Toys</li>
                            <li>My Toys</li>
                            <li>Add A Toy</li>
                            <li>Blogs</li>
                            <Link to="/login">login</Link>
                        </ul>
                    </div>
                    <a className="text-3xl">ActionToys</a>
                </div>

                {/* Desktop responsive */}

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8">
                        <Link to="/">Home</Link>
                        <li>All Toys</li>
                        <li>My Toys</li>
                        <li>Add A Toy</li>
                        <li>Blogs</li>
                        <Link to="/login">login</Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end dropdown-hover">
                        <label tabIndex={0} className="text-4xl"><FaRegUserCircle></FaRegUserCircle></label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 text-white rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;