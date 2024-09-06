import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data.destinations);
        setSelectedDestination(data.destinations[0]);
      });
  }, []);

  const handleDestinationClick = (destinationName) => {
    const destination = destinations.find((d) => d.name === destinationName);
    setSelectedDestination(destination);
  };

  if (!selectedDestination) return <div>Loading...</div>;

  return (
    <div className="text-white overflow-x-hidden overflow-y-auto ">
      <img
        className="absolute"
        src="public/destination/background-destination-desktop.jpg "
        alt=""
      />
      <Navbar />
      <div className="relative flex">
        <h2 className="text-white relative translate-y-[10px] translate-x-40 text-xl pt-10">
          01 PICK YOUR DESTINATION
        </h2>
        <img
          className="relative pt-20 translate-y-[50px] "
          src={selectedDestination.images.png}
          alt={selectedDestination.name}
        />

        <div className="relative translate-x-[130px] translate-y-[100px]">
          <ul className="flex gap-6">
            {destinations.map((destination) => (
              <li
                key={destination.name}
                className="cursor-pointer"
                onClick={() => handleDestinationClick(destination.name)}
              >
                {destination.name.toUpperCase()}
              </li>
            ))}
          </ul>

          <h3 className="text-7xl text-start pt-4">
            {selectedDestination.name.toUpperCase()}
          </h3>

          <p className="w-[400px] pt-6">{selectedDestination.description}</p>
          <div className="pt-8">
            <hr />
            <div className="flex justify-between mr-[30px]  mt-6">
              <div className="pb-6">
                <span>AVG. DISRANCE</span>
                <h3 className="text-3xl">{selectedDestination.distance}</h3>
              </div>

              <div>
                <span>EST. TRAVEL TIME</span>
                <h3 className="text-3xl">{selectedDestination.travel}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
