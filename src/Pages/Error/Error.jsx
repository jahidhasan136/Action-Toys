import errorImg from '../../assets/error/error.png'
import UseTitles from '../../Share/Hooks/UseTitles';


const Error = () => {
    UseTitles('Erors Page')
    return (
        <div className=" flex mt-28 justify-center">
            <img className="w-[600px]" src={errorImg} alt="" />
        </div>
    );
};

export default Error;