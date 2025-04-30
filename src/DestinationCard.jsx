import React from "react";

const DestinationCard = ({ destination }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm">
      <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{destination.name}</h2>
        <p className="text-gray-600">{destination.location}</p>
        <p className="text-sm text-gray-700 my-2">{destination.description}</p>
        <p className="font-semibold text-blue-500">{destination.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;