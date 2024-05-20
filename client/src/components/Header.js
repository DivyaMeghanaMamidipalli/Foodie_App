import {LOGO_URL} from "../utils/images/logo.jpg";
import {Link} from "react-router-dom";

const Header=()=>{
    return(
        <div className="header border">
            <div className="logo-container">
                <img 
                    className="logo"
                    src={LOGO_URL}
                    alt="image"
                />
            </div>
            <div className="nav-items">
                <p><Link to="/">Home</Link></p>
                <p><Link to="/about">About Us</Link></p>
            </div>
            
        </div>
    );
};

export default Header;