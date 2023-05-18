import img1 from '../../../assets/toys/img1.jpg'
import img2 from '../../../assets/toys/img2.jpg'
import img3 from '../../../assets/toys/img3.jpg'
import img4 from '../../../assets/toys/img4.jpg'
import img5 from '../../../assets/toys/img5.jpg'
import img6 from '../../../assets/toys/img6.jpg'
import img7 from '../../../assets/toys/img7.jpg'
import img8 from '../../../assets/toys/img8.jpg'
import img9 from '../../../assets/toys/img9.jpg'
import img10 from '../../../assets/toys/img10.jpg'
import img11 from '../../../assets/toys/img11.jpg'
import img12 from '../../../assets/toys/img12.jpg'


const ToyGallery = () => {
    return (
        <div className="my-16">
            <h2 className="text-3xl font-bold md:text-center mb-10">Toys Gallery</h2>
            <div className="grid justify-center max-w-[1240px] mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-10 lg:gap-32">
                    <div className="w-80 h-80">
                        <figure><img className="h-52 w-full" src={img1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Toys</h2>
                            <p>This is a brand new toys</p>
                        </div>
                    </div>
                    <div className=" w-80 h-80">
                        <figure><img className="h-52 w-full" src={img2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Toys</h2>
                            <p>This is a brand new toys</p>
                        </div>
                    </div>
                    <div className=" w-80 h-80">
                        <figure><img className="h-52 w-full" src={img3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Toys</h2>
                            <p>This is a brand new toys</p>
                        </div>
                    </div>
                    <div className=" w-80 h-80">
                        <figure><img className="h-52 w-full" src={img4} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Toys</h2>
                            <p>This is a brand new toys</p>
                        </div>
                    </div>
                    <div className=" w-80 h-80">
                        <figure><img className="h-52 w-full" src={img5} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Toys</h2>
                            <p>This is a brand new toys</p>
                        </div>
                    </div>
                    <div className=" w-80 h-80">
                        <figure><img className="h-52 w-full" src={img6} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Toys</h2>
                            <p>This is a brand new toys</p>
                        </div>
                    </div>
                    <div className=" w-80 h-80">
                        <figure><img className="h-52 w-full" src={img7} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Toys</h2>
                            <p>This is a brand new toys</p>
                        </div>
                    </div>
                    <div className=" w-80 h-80">
                        <figure><img className="h-52 w-full" src={img8} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Toys</h2>
                            <p>This is a brand new toys</p>
                        </div>
                    </div>
                    <div className=" w-80 h-80">
                        <figure><img className="h-52 w-full" src={img9} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Toys</h2>
                            <p>This is a brand new toys</p>
                        </div>
                    </div>
                    <div className=" w-80 h-80">
                        <figure><img className="h-52 w-full" src={img10} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Toys</h2>
                            <p>This is a brand new toys</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyGallery;