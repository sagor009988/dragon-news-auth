import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const BreakingNews = () => {
    return (
        <div className='flex'>
            <button className='btn btn-secondary'>Breaking News</button>
            <Marquee gradientColor={[255 ,128,132]} gradientWidth={200}>
                <Link>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eaque!.........
                </Link>
                <Link>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eaque!.........
                </Link>
                <Link>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eaque!.........
                </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;