import { Link } from "react-router-dom";


const SingleToys = ({ allToys, toys }) => {
    const { name, subcategory, quantity, price, _id } = toys
    // let count;
    for (let i = 0; i < allToys.length; i+= 2) {
        // count[i]
    }
    return (
        <tr>
            <th>{1}</th>
            <td>{name}</td>
            <td>{subcategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><Link to={`/toys/${_id}`}><button className="btn btn-outline btn-warning">Details</button></Link></td>
        </tr>
    );
};

export default SingleToys;