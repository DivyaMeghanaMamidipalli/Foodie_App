import {CDN_URL} from "../utils/constants";

const RestaurantCard=(props)=>{
    const { resData }=props;
    return(
        <div className="res-card ">
            <div className="content">
                <img className="card_image"
                    src={CDN_URL+resData.info.cloudinaryImageId}
                    alt="image"
                />
                <div className="data">
                    <h2>{resData.info.name}</h2>
                    <div className="imp_data">
                        <h4>{resData.info.avgRating} stars</h4>
                        <h4>{resData.info.sla.deliveryTime}mins</h4>
                    </div>
                    <p>{resData.info.cuisines.join(",")}</p>
                </div>
            </div>
        </div>
    )
};

export default RestaurantCard;