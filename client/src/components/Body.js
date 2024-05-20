import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
// import resObjs from "../utils/mockData";
import { DATA_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body=()=>{
    const [listObjs, setListObjs]=useState([]);
    const [filListObjs, setFilListObjs]=useState([]);

    const [searchText, setSearchText]=useState([""]);
    
    useEffect(()=>{
        fetchData();
    },[]);

    
    const fetchData = async ()=>{
        try{
            const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",{
                
            });
            const json=await data.json();
            console.log(json);
            //Optional Chaining
            setListObjs(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilListObjs(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch(err) {};
    };

    //Conditional Rendering
    return (listObjs.length === 0) ? <Shimmer/> : (
        <div className="body">
            <div className="search_bar">
                <input type="text" className="search-box border" value={searchText}
                    onChange={(e)=> {
                        setSearchText(e.target.value);
                    }}
                />
                
                <button className="search-btn border"
                    onClick={() => {
                            const filteredList= listObjs.filter(
                                (restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilListObjs(filteredList);
                        }}
                >Search</button>
                
            </div>
            <div className="filter">
                    <button 
                        className="top-rated-btn"
                        onClick={() => {
                            const filteredList= listObjs.filter(
                                (restaurant) => restaurant.info.avgRating > 4.5
                            );
                            setFilListObjs(filteredList);
                        }}>
                        Top Rated Restaurants
                    </button>
            </div>
            <div className="res-container">
                {
                   filListObjs.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                   ))
                }
            </div>
        </div>
    )
};

export default Body;