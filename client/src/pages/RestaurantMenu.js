import {useState,useEffect} from "react";
import Shimmer from "../components/Shimmer";
const RestaurantMenu=()=>{

    const [resInfo, setResInfo] = useState([]);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",{
                
        });
        const json=await data.json();
        setResInfo(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    
    //const {name,cuisines,costForTwo}=
        resInfo[1]?.info;
    return (resInfo==null) ?(
        <Shimmer/>
    ) : (
        <div className="menu">
            <h2>{resInfo[1]?.info?.name}</h2>
            <p>{resInfo[1]?.info?.avgRating} stars</p>
            <p>{resInfo[1]?.info?.sla?.deliveryTime} mins</p>
            <p>{resInfo[1]?.info?.cuisines.join(",")}</p>

        </div>
    );
};

export default RestaurantMenu;