import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const MyToysTable = ({ toys, handleDelete }) => {
    const { picture, name, sellername, subcategory, price, _id } = toys



    return (
        <tr className="">
            <td>
                <img className="w-14 rounded-full" src={picture} />
            </td >
            <td>
                <p>{name}</p>
            </td>
            <td>{sellername}</td>
            <td>{subcategory}</td>
            <td>{price}</td>
            <td className="flex justify-center gap-3 items-center mt-5">
                <Link to={`/update-toys/${_id}`}><FaRegEdit className="text-2xl hover:text-warning"></FaRegEdit></Link>
                <Link onClick={() => handleDelete(_id)}><FaRegTrashAlt className="text-2xl hover:text-warning"></FaRegTrashAlt></Link>
            </td>
        </tr >
    );
};

export default MyToysTable;