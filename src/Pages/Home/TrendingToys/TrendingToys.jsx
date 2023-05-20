import img1 from '../../../assets/trending/img1.jpg'
import img5 from '../../../assets/trending/img3.jpg'
import img3 from '../../../assets/trending/img5.jpg'
import img10 from '../../../assets/trending/img10.jpg'

const TrendingToys = () => {
    return (
        <div className="mb-8 max-w-[1240px] mx-auto p-10">
            <h1 className="text-center text-5xl font-bold mb-10">Our Trending Toys</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center lg:gap-8">
                <div className="card card-compact h-96 w-96 bg-base-100 shadow-xl" data-aos="zoom-in-right">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Strom Tropper</h2>
                        <p>It is our best trending product</p>
                        <div className="card-actions flex items-center">
                            <p className="text-red-500 font-bold">Price: $18</p>
                            <button className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact h-96 w-96 bg-base-100 shadow-xl" data-aos="zoom-in-left">
                    <figure><img src={img5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Spinder Man</h2>
                        <p>It is our best trending product</p>
                        <div className="card-actions flex items-center">
                            <p className="text-red-500 font-bold">Price: $8</p>
                            <button className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact h-96 w-96 bg-base-100 shadow-xl" data-aos="zoom-in-right">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Thor</h2>
                        <p>It is our best trending product</p>
                        <div className="card-actions flex items-center">
                            <p className="text-red-500 font-bold">Price: $11</p>
                            <button className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact h-96 w-96 bg-base-100 shadow-xl" data-aos="zoom-in-left">
                    <figure><img src={img10} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Super Man</h2>
                        <p>It is our best trending product</p>
                        <div className="card-actions flex items-center">
                            <p className="text-red-500 font-bold">Price: $6</p>
                            <button className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingToys;