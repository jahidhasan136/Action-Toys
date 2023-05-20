import bannerImg from '../../../assets/banner.jpg'

const Banner = () => {
    return (
            <div className="h-screen bg-cover flex place-items-center bg-center bg-no-repeat w-full" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className='container max-w-[1240px] mx-auto'>
                    <div className="hero-overlay top-0 bg-blend-darken bg-black/50"></div>
                    <div className="container max-w-[1240px] mx-auto">
                        <div className="w-96 lg:w-[500px] text-white p-5 space-y-7">
                            <h1 className="mb-5 text-5xl font-bold">Hello Toy Lovers !</h1>
                            <p className="mb-5">I will provide a best product in this website. Our selling flexibility is ossam. And I also best service in our clients</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Banner;