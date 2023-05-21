import { Link } from "react-router-dom";


const AddToys = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content my-24">
                <div className="card flex-shrink-0 w-[500px] lg:w-[900px] shadow-2xl bg-base-100">
                    <h1 className="text-4xl text-center pt-3 font-bold">Add Toys</h1>
                    <form className="card-body pb-2">
                        <div className="lg:flex w-full gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name="title" placeholder="toys title" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Sub-category</span>
                                </label>
                                <input type="text" name="subCategory" placeholder="sub-category" className="input input-bordered w-full" required />
                            </div>
                        </div>
                        <div className="lg:flex w-full gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="toy price" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Ratings</span>
                                </label>
                                <input type="text" name="rating" placeholder="toy ratings" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" name="quantity" placeholder="toy quantity" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="w-full lg:flex gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input type="text" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <input type="email" name="email" className="input input-bordered" required />
                            </div>
                            </div>
                            <div className="w-full flex justify-center py-5">
                                <textarea className="rounded-md px-5 py-4" name="" id="" placeholder="Enter Toys Description" cols="100" rows="10"></textarea>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToys;