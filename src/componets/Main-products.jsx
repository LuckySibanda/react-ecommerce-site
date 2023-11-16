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
            </div>
            
        </section>
    )
}

MainBody.PropTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    priceCents: PropTypes.number.isRequired,
}