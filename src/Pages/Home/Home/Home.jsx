import Banner from "../Banner/Banner";
import Services from "../Services/Services";
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
            <Services></Services>
        </div>
    );
};

export default Home;