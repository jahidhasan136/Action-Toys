import { useLoaderData } from "react-router-dom";
import SingleToys from "../SingleToys/SingleToys";

const AllToys = () => {
    const allToys = useLoaderData()
    console.log(allToys)
    return (
        <div className="my-24 max-w-[1240px] mx-auto p-10">
            <h1 className="text-center text-4xl font-bold mb-10">All Toys</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="border">
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Sub-category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    allToys.map(toys => <SingleToys key={toys._id} allToys={allToys} toys={toys}></SingleToys>)
                                }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;