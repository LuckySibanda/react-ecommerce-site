import React from "react"
import PropTypes from 'prop-types'

export default function MainBody(props) {

    return (
        <section>

            <div className="product--card">
                <div className="product--image--container">
                    <img src={props.image} alt="" />
                </div>
                <p>{props.name}</p>
                <p>{props.priceCents}</p>

                <button 
                    onClick={()=>props.handleClick(props.id, props.name)}>
                    Add to cart
                </button>
            </div>
        </section>
    )
}

MainBody.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    priceCents: PropTypes.number.isRequired,
}