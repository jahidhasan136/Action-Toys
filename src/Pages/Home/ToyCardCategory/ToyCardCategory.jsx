import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import { Link } from 'react-router-dom';

const ToyCardCategory = ({ toy }) => {
    const { name, picture, rating, price, _id } = toy

    return (
        <div className="md:flex gap-10">
            <div className="card card-side bg-base-100 shadow-2xl w-[500px]">
                <figure><img className="w-64 h-full" src={picture} alt="Movie" /></figure>
                <div className="card-body grid">
                    <h2 className="card-title text-3xl">{name}</h2>
                    <div className="flex items-center justify-between gap-8">
                        <p>{price}</p>

                        <div className="rating">
                            Rating:
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={rating}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`toys/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCardCategory;