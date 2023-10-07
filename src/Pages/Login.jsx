import React from 'react';
import Nav from '../Shared/Nav';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Shared/AuthProvider/AuthProvider';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {signIn}=useContext(AuthContext)
  const location=useLocation()
  const navigate=useNavigate()

    const handleLogin=e=>{
        e.preventDefault()
        const form=new FormData(e.currentTarget)
        const email=form.get('email')
        const password=form.get('password')

        // login setup
        signIn(email,password)
        .then(res=>{
          console.log(res.user);

          navigate(location?.state?location.state:'/')
        })
        .catch(error=>{
          console.log(error.message);
        })
        
    }

    return (
        <div>
        <Nav></Nav>
        <div className="hero min-h-screen bg-base-200">
  
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a  href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

      </form>
      
      <p className='pb-4 text-center'>Don't Have an account?<Link className='ml-2 text-blue-600 font-bold ' to={'/register'}>register</Link></p>

    </div>
  </div>
  
      </div>
    );
};

export default Login;