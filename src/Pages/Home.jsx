import { useEffect, useState } from "react";
import Header from "../Shared/Header";
import LeftSideNav from "../Shared/LeftSideNav";
import Nav from "../Shared/Nav";
import RightSideNav from "../Shared/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";
import {
    
    useLoaderData,
  } from "react-router-dom";


const Home = () => {
   
    const news=useLoaderData()
    
    
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Nav></Nav>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border-4 ">
                <LeftSideNav></LeftSideNav>
            </div>
            <div className="col-span-2 border-4">
                {
                    news.map(aNews=><NewsCard key={aNews._id} news={aNews}></NewsCard>)
                }
            </div>
            <div className="border-4">
                <RightSideNav></RightSideNav>
            </div>
           </div>
        </div>
    );
};

export default Home;