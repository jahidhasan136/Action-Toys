import { Outlet } from "react-router-dom";
import Navbar from "../Share/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto max-w-[1240px]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;