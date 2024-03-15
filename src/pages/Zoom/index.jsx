import HomeButtons from "@/components/HomeButtons";
import EnterZoom from "@/assets/EnterZoom.png";

import "./styles.css";

const Zoom = () => {
  return (
    <div className="zoom">
      <div className="zoom-button">
        <a href="https://zoom.us/" target="_blank">
          <img src={EnterZoom} className="zoom-image" />
        </a>
      </div>
      <div className="zoom-home-button">
        <HomeButtons />
      </div>
    </div>
  );
};

export default Zoom;
