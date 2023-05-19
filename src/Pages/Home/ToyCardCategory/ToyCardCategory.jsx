import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import img3 from '../../../assets/toys/img3.jpg'
import img8 from '../../../assets/toys/img8.jpg'
import img4 from '../../../assets/toys/img4.jpg'
import img5 from '../../../assets/toys/img5.jpg'
import img1 from '../../../assets/toys/img1.jpg'
import img11 from '../../../assets/toys/img11.jpg'
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