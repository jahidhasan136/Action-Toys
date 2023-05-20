import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useState } from 'react';
import { updateProfile } from 'firebase/auth';


const Register = () => {

    const {createUser} = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target 
        const name = form.name.value 
        const email = form.email.value 
        const password = form.password.value 
        const photo = form.photo.value 
        const newUser = {name, email, password, photo}
        console.log(newUser)

        createUser(email, password)
        .then(result => {
            const signUp = result.user 
            console.log(signUp)
            form.reset()
            setError('')
            handleProfile(result.user, name, photo)
            navigate('/')
            if(signUp){
                setSuccess('Your Account Successfully created')
            }
        })
        .catch(error => {
            setError(error.message)
            setSuccess('')
        })
    }

    const handleProfile = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(() => { 
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="card flex-shrink-0  w-[450px] shadow-2xl bg-base-100">
                    <h1 className="text-4xl text-center pt-3 font-bold">Please Register !!</h1>
                    <form onSubmit={handleRegister} className="card-body pb-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="name" className="input input-bordered" required/>
                        </div>
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
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required/>
                        </div>
                        <small className="mt-6 text-red-500"><p>{error}</p></small>
                        <small className="text-green-500"><p>{success}</p></small>
                        <div className="form-control">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <small className="p-4">Already Have an account? <Link to="/login" className="font-bold btn-link">Login</Link></small>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;