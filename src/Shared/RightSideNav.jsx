import React from "react";
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../assets/qZone1.png'
import qZone2 from '../assets/qZone2.png'
import qZone3 from '../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold mb-6">Login with</h2>
        <button className="btn btn-outline text-lg w-full">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline text-lg w-full mt-4">
          <FaGithub></FaGithub>
          Google
        </button>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-6 mt-5">Find Ous on</h2>
        <a
          href=""
          className="flex items-center text-xl justify-center border-2 border-black p-3 rounded-t-lg"
        >
          <FaFacebookF></FaFacebookF> FaceBook
        </a>
        <a
          href=""
          className="flex items-center text-xl justify-center  border-x-2 border-black p-3 "
        >
          <FaTwitter></FaTwitter> FaceBook
        </a>
        <a
          href=""
          className="flex items-center text-xl justify-center border-2 border-black p-3 rounded-b-lg"
        >
          <FaInstagram></FaInstagram> FaceBook
        </a>
       
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-6">Q-Zone</h2>
        {
          <img src={qZone1} alt="" />
        }
        
        {
          <img src={qZone2} alt="" />
        }
        
        {
          <img src={qZone3} alt="" />
        }
        
      </div>
    </div>
  );
};

export default RightSideNav;
