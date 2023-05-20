import { FaMailBulk, FaMobileAlt, FaRegLaugh, FaShippingFast } from "react-icons/fa";

const Services = () => {
    return (
        <div className="max-w-[1240px] mx-auto p-10 mb-10">
            <h1 className="text-center mb-10 text-5xl font-bold">Our Services</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-4">
                <div className="shadow-[0_10px_55px_35px_rgba(0,0,0,0.3)] p-5 rounded-2xl lg:w-64 h-64">
                    <FaShippingFast className="text-8xl mb-3 text-[#F28C18]"></FaShippingFast>
                    <h2 className="font-bold text-lg mb-1">Free Shipping</h2>
                    <p className="text-sm">On everything</p>
                </div>
                <div className="shadow-[0_10px_55px_35px_rgba(0,0,0,0.3)] p-5 rounded-2xl lg:w-64 h-64">
                    <FaMobileAlt className="text-8xl mb-3 text-[#F28C18]"></FaMobileAlt>
                    <h2 className="font-bold text-lg mb-1">Give Us A Call</h2>
                    <p className="text-sm">Or Whatsapp on - 01327229069</p>
                </div>
                <div className="shadow-[0_10px_55px_35px_rgba(0,0,0,0.3)] p-5 rounded-2xl lg:w-64 h-64">
                    <FaMailBulk className="text-8xl mb-3 text-[#F28C18]"></FaMailBulk>
                    <h2 className="font-bold text-lg mb-1">Bulk Inquiry</h2>
                    <p className="text-sm">Email - jh3495689@gmail.com</p>
                </div>
                <div className="shadow-[0_10px_55px_35px_rgba(0,0,0,0.3)] p-5 rounded-2xl lg:w-64 h-64">
                    <FaRegLaugh className="text-8xl mb-3 text-[#F28C18]"></FaRegLaugh>
                    <h2 className="font-bold text-lg mb-1">ActionToys Quality Assurance</h2>
                    <p className="text-sm">Every product is original, fresh and high quality</p>
                </div>
            </div>
        </div>
    );
};

export default Services;