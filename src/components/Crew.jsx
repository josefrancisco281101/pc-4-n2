import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Crew = () => {
  const [crewMembers, setCrewMembers] = useState([]);
  const [selectedCrewMember, setSelectedCrewMember] = useState(null);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setCrewMembers(data.crew);
        setSelectedCrewMember(data.crew[0]);
      });
  }, []);

  const handleCrewMemberChange = (index) => {
    setSelectedCrewMember(crewMembers[index]);
  };

  if (!selectedCrewMember) return <div>Loading...</div>;

  return (
    <div className="text-white">
      <img
        className="absolute"
        src="public/crew/background-crew-desktop.jpg"
        alt="Crew Background"
      />
      <Navbar />
      <div className="relative mt-[40px] mx-[150px]">
        <h2 className="text-xl">02 MEET YOUR CREW</h2>

        <div className="mt-[100px] flex">
          <div>
            <h4 className="text-2xl">
              {selectedCrewMember.role.toUpperCase()}
            </h4>
            <h2 className="text-4xl mt-3">
              {selectedCrewMember.name.toUpperCase()}
            </h2>
            <p className="mt-8 w-[397px] text-center">
              {selectedCrewMember.bio}
            </p>
          </div>

          <div className="absolute bottom-10 flex gap-5 translate-y-[-40px]">
            {crewMembers.map((crewMember, index) => (
              <div
                key={crewMember.name}
                className={`w-4 h-4 rounded-full cursor-pointer ${
                  selectedCrewMember.name === crewMember.name
                    ? "bg-white"
                    : "bg-gray-400"
                }`}
                onClick={() => handleCrewMemberChange(index)}
              ></div>
            ))}
          </div>

          <div className="">
            <img
              className="w[400px] h-[400px] translate-x-40 translate-y-[-50px]"
              src={selectedCrewMember.images.png}
              alt={selectedCrewMember.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
