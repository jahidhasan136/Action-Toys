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
            <h2 className="text-3xl font-bold md:text-center">Gallery Section</h2>
            <div className="grid md:grid-cols-2 grid-cols-4">
                <div>
                    <img className="" src={img1} alt="" />
                </div>
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
                <img src={img9} alt="" />
                <img src={img10} alt="" />
                <img src={img11} alt="" />
                <img src={img12} alt="" />
                {/* <img src={img13} alt="" /> */}
            </div>
        </div>
    );
};

export default ToyGallery;