import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Technology = () => {
  const [technologies, setTechnologies] = useState([]);
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data.technology);
        setSelectedTechnology(data.technology[0]);
      })
      .catch((error) =>
        console.error("Error fetching technology data:", error)
      );
  }, []);

  const handleTechnologyChange = (index) => {
    setSelectedTechnology(technologies[index]);
  };

  if (!selectedTechnology) return <div>Loading...</div>;

  return (
    <div className="text-white">
      <img
        className="absolute"
        src="public/technology/background-technology-desktop.jpg"
        alt="Technology Background"
      />
      <Navbar />
      <div className="relative mt-[40px] mx-[150px]">
        <h2 className="text-xl">03 SPACE LAUNCH 101</h2>

        <div className="mt-[100px] flex">
          <div className="flex flex-col gap-5 mr-[50px]">
            {technologies.map((technology, index) => (
              <button
                key={technology.name}
                className={`w-14 h-14 rounded-full text-lg font-bold border ${
                  selectedTechnology.name === technology.name
                    ? "bg-white text-black"
                    : "bg-transparent text-white"
                }`}
                onClick={() => handleTechnologyChange(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="w-[50%]">
            <h4 className="text-2xl">
              {selectedTechnology.name.toUpperCase()}
            </h4>
            <p className="mt-8 w-[397px] text-center">
              {selectedTechnology.description}
            </p>
          </div>

          <div className="ml-[50px]">
            <img
              className="w-[400px] h-[400px]"
              src={selectedTechnology.images.portrait}
              alt={selectedTechnology.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
