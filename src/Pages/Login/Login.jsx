import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value 
        const password = form.password.value 
        const newUser = {email, password}
        console.log(newUser)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="card flex-shrink-0  w-[450px] shadow-2xl bg-base-100">
                    <h1 className="text-4xl text-center pt-3 font-bold">Please Login !!</h1>
                    <form onSubmit={handleLogin} className="card-body pb-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <small>Dont Have an account? <Link to="/register" className="font-bold btn-link">Register</Link></small>
                    </form>
                    <p className="text-center text-xl font-bold">or</p>
                    <div className="p-5 text-center">
                        <button className="btn bg-blue-600 flex gap-3 mx-auto"><FaGoogle className="text-lg"></FaGoogle> Sign in with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;