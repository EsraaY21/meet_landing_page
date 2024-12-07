import heroLeft from "/assets/desktop/image-hero-left.png";
import heroRight from "/assets/desktop/image-hero-right.png";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="people people_left">
          <img src={heroLeft} alt="images left" />
        </div>

        <div className="people people_right">
          <img src={heroRight} alt="images right" />
        </div>

        <div className="content">
          <div className="container">
            <h1 className="text-1">Group Chat for Everyone</h1>
            <p className="text-4">
              Meet makes it easy to connect with others face-to-face virtually
              and collaborate across any device.
            </p>

            <div className="buttons">
              <a href="" className="btn">
                Download v1.3
              </a>
              <a href="" className="btn">
                What is it?
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
