import Banner from "../Banner/Banner";
import ToyCategory from "../ToyCategory/ToyCategory";
import ToyGallery from "../ToyGallery/ToyGallery";
import TrendingToys from "../TrendingToys/TrendingToys";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToyGallery></ToyGallery>
            <ToyCategory></ToyCategory>
            <TrendingToys></TrendingToys>
        </div>
    );
};

export default Home;