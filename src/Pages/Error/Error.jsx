import { Link } from 'react-router-dom';
import errorImg from '../../assets/error/error.png'
import UseTitles from '../../Share/Hooks/UseTitles';


const Error = () => {
    UseTitles('Erors Page')
    return (
        <div>
            <div className=" flex mt-28 justify-center">
            <img className="w-[600px]" src={errorImg} alt="" />
        </div>
            <Link to="/"><button className='btn btn-warning text-center flex justify-center mx-auto'>Back To Home</button></Link>
        </div>
    );
};

export default Error;