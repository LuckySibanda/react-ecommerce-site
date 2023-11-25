import React from "react";
import PropTypes from "prop-types";

export default function Categories(props) {

    const kitchen = "kitchen"

    return (
        <section className="category--container">
            <div>electronics</div>
            <div>clothes</div>
            <div>shoes</div>
            <button onClick={props.handleClick}>kitchen</button>
            <div>household</div>
        </section>
    )
}

Categories.propTypes = {
    handleClick: PropTypes.func.isRequired,
};

// electronics
// household
// shoes / sneakers
// clothes
// kitchen
// hardware