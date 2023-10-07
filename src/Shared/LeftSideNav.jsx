import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('/categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
  
    return (
        <div>
           {
            categories.map(category=><Link className='block py-3 text-xl font-bold text-center active:bg-red-700' to={`/categories ${category.id}`}>{category.name}</Link>)
           }
        </div>
    );
};

export default LeftSideNav;