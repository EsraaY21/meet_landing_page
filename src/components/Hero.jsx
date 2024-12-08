import heroLeft from "/assets/desktop/image-hero-left.png";
import heroRight from "/assets/desktop/image-hero-right.png";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="people">
          <div className="people_left">
            <img src={heroLeft} alt="images left" />
          </div>

          <div className="people_right">
            <img src={heroRight} alt="images right" />
          </div>
        </div>

        <div className="content">
          <div className="container">
            <h1 className="text-1">Group Chat for Everyone</h1>
            <p className="text-4">
              Meet makes it easy to connect with others face-to-face virtually
              and collaborate across any device.
            </p>

            <div className="buttons">
              <a href="" className="btn btn_primary text-5">
                Download <span>v1.3</span>
              </a>
              <a href="" className="btn btn_secondary text-5">
                What is it?
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
