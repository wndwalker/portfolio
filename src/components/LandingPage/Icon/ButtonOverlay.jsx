import "./styles.css"; // Import CSS file for styling

// Define a functional component for button with overlay
// eslint-disable-next-line react/prop-types
const ButtonOverlay = ({ buttonImage, overlayImage }) => {
  return (
    <div className="button-container">
      <img src={buttonImage} alt="Button" className="button-image" />
      <img src={overlayImage} alt="Overlay" className="overlay-image" />
    </div>
  );
};

export default ButtonOverlay;
