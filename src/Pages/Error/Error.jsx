import React from 'react';
import errorImg from '../../assets/error/error.png'


const Error = () => {
    return (
        <div className=" flex mt-28 justify-center">
            <img className="w-[600px]" src={errorImg} alt="" />
        </div>
    );
};

export default Error;