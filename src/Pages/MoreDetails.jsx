import React from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../Shared/Nav';
import RightSideNav from '../Shared/RightSideNav';

const MoreDetails = () => {
    const {id}=useParams()
    console.log(id);
    return (
        <div>
           <Nav></Nav>
            <div className='grid md:grid-cols-4 '>

               

                <div className='col-span-3'>
                <h2 className="text-xl font-bold">Details</h2>
                {id}
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>


        </div>
    );
};

export default MoreDetails;