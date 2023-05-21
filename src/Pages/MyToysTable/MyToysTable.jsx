

const MyToysTable = ({ toys }) => {
    console.log(toys)
    const { picture, name, sellername, subcategory, price } = toys
    return (
        <tr>
            <td>
                <img className="w-14 rounded-full" src={picture} />
            </td >
            <td>
                <p>{name}</p>
            </td>
            <td>{sellername}</td>
            <td>{subcategory}</td>
            <td>{price}</td>
        </tr >
    );
};

export default MyToysTable;