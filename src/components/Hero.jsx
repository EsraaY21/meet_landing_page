import heroLeft from "/assets/desktop/image-hero-left.png";
import heroRight from "/assets/desktop/image-hero-right.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="people people_left">
        <img src={heroLeft} alt="images left" />
      </div>

      <div className="middle">text</div>

      <div className="people people_right">
        <img src={heroRight} alt="images right" />
      </div>
    </section>
  );
}
