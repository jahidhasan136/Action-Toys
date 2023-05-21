import { Link } from "react-router-dom";


const SingleToys = ({ index, toys }) => {
    const { name, subcategory, quantity, price, _id } = toys
    
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{subcategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><Link to={`/toys/${_id}`}><button className="btn btn-outline btn-warning">Details</button></Link></td>
        </tr>
    );
};

export default SingleToys;