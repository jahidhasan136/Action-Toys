import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import UseTitles from "../../Share/Hooks/UseTitles";


const UpdateToys = () => {
    const {user} = useContext(AuthContext)
    UseTitles('Updated-Toys')
    const toys = useLoaderData()

    const { name, subcategory, quantity, price, _id, rating, picture, description } = toys

    const handleUpdateToy = event => {
        event.preventDefault()
        const form = event.target 
        const name = form.name.value 
        const subCategory = form.subCategory.value 
        const price = form.price.value
        const rating = form.rating.value 
        const quantity = form.quantity.value 
        const picture = form.picture.value 
        const sellername = form.sellername.value 
        const email = form.email.value
        const description = form.description.value
        const updateToys = {
            name,
            subcategory: subCategory, 
            price, 
            rating, 
            quantity, 
            picture, 
            sellername, 
            email, 
            description
        }
        fetch(`https://action-toys-server-nurmorshed7987-gmailcom.vercel.app/toys/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateToys)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            if(result.modifiedCount > 0){
            toast("Updated Successfully")
            }
        })
        form.reset()
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content my-24">
                <div className="card flex-shrink-0 w-[500px] lg:w-[900px] shadow-2xl bg-base-100">
                    <h1 className="text-4xl text-center pt-3 font-bold">Update Toys</h1>
                    <form onSubmit={handleUpdateToy} className="card-body pb-2">
                        <div className="lg:flex w-full gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name="name" defaultValue={name} className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Sub-category</span>
                                </label>
                                <input type="text" name="subCategory" defaultValue={subcategory} className="input input-bordered w-full" required />
                            </div>
                        </div>
                        <div className="lg:flex w-full gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" defaultValue={price} className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Ratings</span>
                                </label>
                                <input type="text" name="rating" defaultValue={rating} className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" name="quantity" defaultValue={quantity} className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="picture" defaultValue={picture} className="input input-bordered" required />
                        </div>
                        <div className="w-full lg:flex gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input type="text" name="sellername" defaultValue={user?.displayName}  className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                            </div>
                            </div>
                            <div className="w-full flex justify-center py-5">
                                <textarea className="rounded-md px-5 py-4" name="description" id="" defaultValue={description} cols="100" rows="10"></textarea>
                            </div>
                            <input className="btn btn-warning mb-3" type="submit" value="Add Toys" name="" id="" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateToys;