import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useState } from "react";
import MyToysTable from "../MyToysTable/MyToysTable";


const MyToys = () => {

    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    const [sort, setSort] = useState(null)
    // console.log(sort)
    useEffect(() => {

        let url = `https://action-toys-server-nurmorshed7987-gmailcom.vercel.app/mytoys?email=${user?.email}`;

        if (sort === 'low') {
            url = `https://action-toys-server-nurmorshed7987-gmailcom.vercel.app/mytoys?email=${user?.email}&sort=${sort}`;
        } else if (sort === 'high') {
            url = `https://action-toys-server-nurmorshed7987-gmailcom.vercel.app/mytoys?email=${user?.email}&sort=${sort}`;
        }

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })

    }, [sort, user])


    const handleDelete = (id) => {
        fetch(`https://action-toys-server-nurmorshed7987-gmailcom.vercel.app/toys/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    const remaining = myToys.filter(toy => toy._id !== id)
                    setMyToys(remaining)
                }

            })
    }

    return (
        <div className="my-24 max-w-[1240px] p-10 mx-auto        ">
            <div className="overflow-x-auto w-full">
                <button onClick={() => setSort("low")}>Low Price</button>
                <button onClick={() => setSort("high")}>High Price</button>
                <table className="table w-full">
                    {/* head */}
                    <thead className="border">
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Sller</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(toys => <MyToysTable key={toys
                                ._id} toys={toys} handleDelete={handleDelete}></MyToysTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;