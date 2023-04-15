import React from "react";

function SpotCard(props) {
    const { name, description, location, imageUrl } = props

    return (
        <div className="SpotCard">
            <img src={imageUrl} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{location}</p>
        </div>
    )
}
export default SpotCard;