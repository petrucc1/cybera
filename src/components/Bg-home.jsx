import React, { useEffect } from "react";
import GLOBE from "vanta/src/vanta.globe";

function Home() {
  useEffect(() => {
    GLOBE({
      el: "#vanta",
      backgroundColor: "#FFF",
      color: "#fff",
      color2: "#fff",
      mouseControls: false,
      size: 0.6,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
    });
  }, []);

  return (
    <div className="Bg-home-vanta">
      <div className="bg" id="vanta"></div>
    </div>
  );
}

export default Home;
