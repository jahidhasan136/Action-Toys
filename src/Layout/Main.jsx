import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Share/Navbar/Navbar";
import Footer from "../Share/Footer/Footer";
import { BallTriangle } from "react-loader-spinner";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    const navigation = useNavigation();

    let body;

    if (navigation.state === "loading") {
        body = <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    } else {
        body = <Outlet />
    }
    return (
        <div>
            <Navbar></Navbar>
            {body}
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Main;