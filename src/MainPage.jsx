import React, { useEffect, useState } from "react";

function MainPage() {
  const [currentColors, setCurrentColors] = useState([]);
  useEffect(() => {
    const i = setInterval(() => {
      // console.log(JSON.parse(localStorage.getItem("color") || "[]"));
      setCurrentColors(JSON.parse(localStorage.getItem("color") || "[]"));
    });

    return () => {
      clearInterval(i);
    };
  });
  return (
    <div className="mainPage">
      {currentColors.map((color) => (
        <div style={{ color: color.color }}>{color.fake}</div>
      ))}
    </div>
  );
}

export default MainPage;
