import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useState } from 'react';



const Login = () => {

    const {login, googleLogin} = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value 
        const password = form.password.value 
        const newUser = {email, password}
        console.log(newUser)

        login(email, password)
        .then(result => {
            const login = result.user 
            console.log(login)
            form.reset()
            setError('')
            if(login){
                setSuccess('Login Successfully')
            }
        })
        .catch(error => {
            setError(error.message)
            setSuccess('')
        })
    }

    const handleGoogleLogin = event => {
        event.preventDefault()
        googleLogin()
        .then(result => {
            const google = result.user 
            console.log(google)
            setError('')
            if(google){
                setSuccess('Login Successfully')
            }
        })
        .catch(error => {
            setError(error.message)
            setSuccess('')
        })
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
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <small className="mt-6 mb-2 text-red-500"><p>{error}</p></small>
                        <small className="text-green-500"><p>{success}</p></small>
                        <div className="form-control">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <small>Dont Have an account? <Link to="/register" className="font-bold btn-link">Register</Link></small>
                    </form>
                    <p className="text-center text-xl font-bold">or</p>
                    <div onClick={handleGoogleLogin} className="p-5 text-center">
                        <button className="btn bg-blue-600 flex gap-3 mx-auto"><FaGoogle className="text-lg"></FaGoogle> Sign in with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;