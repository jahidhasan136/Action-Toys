import bannerImg from '../../../assets/banner.jpg'

const Banner = () => {
    return (
            <div className="h-screen w-full">
                <div className='relative'>
                    <img className="h-screen w-full" src={bannerImg} alt="" />
                    <div className="hero-overlay absolute top-0 bg-blend-darken bg-black/50"></div>
                    <div className="hero-content text-neutral-content absolute top-1/3 max-w-[1240px] ml-10 lg:ml-80">
                        <div className="w-96">
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