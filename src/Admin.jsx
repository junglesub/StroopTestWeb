import React, { useEffect, useState } from "react";
import color, { shuffle } from "./colors";

function Admin() {
  const [currentColors, setCurrentColors] = useState([]);

  useEffect(() => {
    localStorage.setItem("color", JSON.stringify(currentColors));
  }, [currentColors]);

  return (
    <div>
      <button
        onClick={() => {
          setCurrentColors([]);
          const mycolors = [...color];
          shuffle(mycolors);
          for (let i = 0; i < 2; i++) {
            setCurrentColors((prev) => [...prev, mycolors.pop()]);
          }

          // add fake color
          setCurrentColors((prev) =>
            prev.map((item) => {
              return {
                ...item,
                fake: mycolors.pop().name,
              };
            })
          );
        }}
      >
        Generate
      </button>
      <div className="adminPage">
        {currentColors.map((color) => (
          <div style={{ color: color.color }}>{color.name}</div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
