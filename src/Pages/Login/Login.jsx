import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const {signInUser} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = e =>{
    e.preventDefault();
     const form = new FormData(e.currentTarget)
     const email = form.get('email')
     const password = form.get('password')
     console.log(email,password)

     signInUser(email,password)
     .then(result =>{
         console.log(result.user)
         toast.success(' You have login successfully')
         e.target.reset();
         navigate('/')
     })
     .catch(error=> {
        console.log(error)
        toast.error('This is an error', error.message,error.code)
     })
                        //   forget password how to recover
    //  sendPasswordResetEmail(auth,email)
    //  .then(()=>{
    //      alert('Please check your email for reset password')
    //        }
    //  )
    //  .catch(error =>{
    //      console.log(error)
    //  })
  }
    
    return (
        <div className="hero min-h-screen bg-base-200">
           
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                       
                       <p>You have no account so please <Link to= '/register'><a className="text-blue-700 mt-10">Register</a></Link></p>
                       <Toaster></Toaster>
                    </form>
                </div>
            
        </div>
    );
};

export default Login;