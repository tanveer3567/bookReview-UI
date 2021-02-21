import React from "react"
import "../Css/Header.css";
import {Link} from "react-router-dom";


class Header extends React.Component {

    render() {
        return (
        <div className="Header">
            <p className="Titile">Book Reviews</p>
            <p className="Link"><Link to="/about">About</Link></p>
            <p className="Link"><Link to="/">Home</Link></p>
        </div>
        );
    }
}

export default Header;