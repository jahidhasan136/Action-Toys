import { Rating } from '@smastrom/react-rating';
import { useLoaderData } from 'react-router-dom';
import './ToysDetails.css'
import { FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import UseTitles from '../../Share/Hooks/UseTitles';

const ToysDetails = () => {
    const categoryDetails = useLoaderData()
    console.log(categoryDetails)
    const { picture, name, price, quantity, rating } = categoryDetails
    UseTitles('Toy Details')
    return (
        <div className="my-32 max-w-[1240px] mx-auto p-10">
            <div className=' md:flex gap-10'>
                <img className='md:w-[500px] lg:w-[600px]' src={picture} alt="" />
                <div className='space-y-8'>
                    <h2 className='text-5xl font-bold'>{name}</h2>
                    <p className='text-[#FF0000]'>Price: {price}</p>
                    <p className='flex gap-3 items-center'>
                        <Rating className='red-red-500 ratings'
                            style={{ maxWidth: 100, color: 'red', }}
                            value={rating}
                            readOnly
                        />
                        (1 Rivew)
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, magnam! Lorem ipsum dolor sit amet.</p>
                    <div className='flex items-center gap-8'>
                        <p className='inline-block px-4 py-1 bg-gradient-to-t from-[#F2713A] to-[#B62767]'>Quantity- {quantity}</p>
                        <button className='btn rounded-none flex gap-2 bg-gradient-to-r from-[#F2713A] to-[#B62767] hover:from-[#B63767] hover:to-[#F2713A]'>Add to Cart <FaShoppingCart className='text-lg'></FaShoppingCart></button>
                    </div>
                    <p className='flex items-center gap-2'><FaRegHeart></FaRegHeart> Add to whislist</p>
                </div>
            </div>
        </div>
    );
};

export default ToysDetails;