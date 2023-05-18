import Banner from "../Banner/Banner";
import ToyCategory from "../ToyCategory/ToyCategory";
import ToyGallery from "../ToyGallery/ToyGallery";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToyGallery></ToyGallery>
            <ToyCategory></ToyCategory>
        </div>
    );
};

export default Home;