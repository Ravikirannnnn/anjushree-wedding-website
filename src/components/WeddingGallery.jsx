import "./WeddingGallery.css";
import border from "../assets/up-border.png";
import Hero from '../assets/Anjusree/Hero.jpeg'; // Replace with your background image
import HeroBg from '../assets/Anjusree/HeroBg.jpeg'; // Replace with your background image
import img1 from '../assets/Anjusree/img1.jpeg'; // Replace with your background image
import img2 from '../assets/Anjusree/img2.jpeg'; // Replace with your background image
// import img3 from '../assets/Anjusree/img3.jpeg'; // Replace with your background image
// import img4 from '../assets/Anjusree/img4.jpeg'; // Replace with your background image
import best from '../assets/Anjusree/best.jpeg'; // Replace with your background image

export default function WeddingGallery() {
  const images = [
    HeroBg,
    best,
    Hero,
    img1,
    img2,
    // img3,
  ];

  return (
    <section className="wedding-gallery">
      <h2 className="gallery-title">Our Beautiful Moments</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className={`gallery-item ${
              index === 0 ? "large" : ""
            }`}
          >
            <img src={img} alt="Wedding memory" />
          </div>
        ))}
      </div>
            <div>
              <img className="border-map" src={border} alt="" />
            </div>
    </section>
  );
}