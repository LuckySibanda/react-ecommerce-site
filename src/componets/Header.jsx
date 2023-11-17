// import React from "react";
import PropTypes from 'prop-types'

export default function Header(props) {


    return (
        <header>
            <div className="logo--container">
                {/* replace with image */}
                <h4>Amazon</h4>
            </div>

            <form className="search--box--container">
                <input 
                    type="text"
                    placeholder="Search"
                />
                <div className="search--icon">
                    {/* <img src="./vite.svg" alt="" /> */}
                    {/* replace with search icon */}
                </div>
            </form>

            <div className="header--cart--buttons">
                <p>Returns 
                    <span>& Orders
                        {/* make bold and on new line, see em */}
                    </span>
                </p>

                <div className="header--cart--container">
                    {/* insert cart icon */}
                    <span className="cart--counter">{props.cartCounter}</span>
                    <p className="to--cart--button">Cart</p>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    cartCounter: PropTypes.number.isRequired,
}