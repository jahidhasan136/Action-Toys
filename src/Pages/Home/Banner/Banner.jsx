import bannerImg from '../../../assets/banner.jpg'

const Banner = () => {
    return (
            <div className="h-screen bg-cover flex place-items-center bg-center bg-no-repeat w-full" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className='container max-w-[1240px] mx-auto'>
                    <div className="hero-overlay top-0 bg-blend-darken bg-black/50"></div>
                    <div className="container max-w-[1240px] mx-auto">
                        <div className="w-96 text-white p-5">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Banner;