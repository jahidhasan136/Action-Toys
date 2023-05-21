import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useState } from "react";
import MyToysTable from "../MyToysTable/MyToysTable";


const MyToys = () => {

    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    const url = `http://localhost:5000/mytoys?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [user?.email])

    return (
        <div className="my-24 max-w-[1240px] p-10 mx-auto        ">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className="border">
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Sller</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                myToys.map(toys => <MyToysTable key={toys
                                ._id} toys={toys}></MyToysTable>)
                            }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;