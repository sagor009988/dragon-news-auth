import React, { useContext } from 'react';
import Nav from '../Shared/Nav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Shared/AuthProvider/AuthProvider';

const Register = () => {

  const {createUser}=useContext(AuthContext)

    const handleRegister=e=>{
        e.preventDefault()
        const form=new FormData(e.currentTarget)
        const name=form.get('name')
        const photo=form.get('photoUrl')
        const email=form.get('email')
        const password=form.get('password')
        // 
        createUser(email,password)
        .then(res=>{
          console.log(res.user);
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
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"  name='name' placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text"  name='photoUrl' placeholder="Photo Url" className="input input-bordered" required />
        </div>
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
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Click To Register</button>
        </div>

      </form>
      
      <p className='pb-4 text-center'>Have an account?<Link className='ml-2 text-blue-600 font-bold ' to={'/login'}>Login</Link></p>

    </div>
  </div>
  
      </div>
    );
};

export default Register;