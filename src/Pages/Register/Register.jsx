import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
    const {createUser} = useContext(AuthContext)

     const handleRegister= e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photoUrl = form.get('photo-url');
        console.log(name,photoUrl)
        const email = form.get('email');
        const password = form.get('password');

        if(password.length < 6){
            toast("Password should be at least 6 charecters ");
            return;
        }
        else if(!/[A-Z]/.test(password)){
            toast('your password have at least one uper case charecters');
            return;
        }
        else if(!/[a-z]/.test(password)){
            toast('your password have at least one lower case charecters')
            return
        }

        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            toast.success('Successfully created!');
            e.target.reset();
        })
        .catch(error=>{
            console.log(error)
            toast.error('This is an error!',error.message,error.code);
        })
     }
    return (
        <div className="hero min-h-screen bg-base-200 py-10">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="Photo url" placeholder="Enter your photo url" name="photo-url" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p>You have already account so please <Link to= '/login'><a className="text-blue-700">Login</a></Link></p>
                    <Toaster></Toaster>
                </form>
            </div>

        </div>
    );
};

export default Register;