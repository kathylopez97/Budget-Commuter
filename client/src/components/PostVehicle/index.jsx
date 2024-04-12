import React from 'react';

const VehiclePost = ({ vehicle }) => {
    return (
        <div className="vehicle-post">
            <h2>{vehicle.title}</h2>
            <img src={vehicle.imageSrc} alt={vehicle.title} />
            <p><strong>Make:</strong> {vehicle.make}</p>
            <p><strong>Model:</strong> {vehicle.model}</p>
            <p><strong>Year:</strong> {vehicle.year}</p>
            <p><strong>Price:</strong> ${vehicle.price}</p>
        </div>
    );
};

export default VehiclePost;
