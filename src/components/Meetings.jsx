import meeting1 from "/assets/desktop/image-woman-in-videocall.jpg";
import meeting2 from "/assets/desktop/image-women-videochatting.jpg";
import meeting3 from "/assets/desktop/image-men-in-meeting.jpg";
import meeting4 from "/assets/desktop/image-man-texting.jpg";
import Divider from "./Divider";

export default function Meetings() {
  return (
    <section className="meetings">
      <div className="container">
        <Divider number="01" />

        <div className="meeting_images">
          <img src={meeting1} className="logo" alt="Logo" />
          <img src={meeting2} className="logo" alt="Logo" />
          <img src={meeting3} className="logo" alt="Logo" />
          <img src={meeting4} className="logo" alt="Logo" />
        </div>

        <div className="meeting_content">
          <h3 className="text-3">Built for modern use</h3>
          <h2 className="text-2">Smarter meetings, all in one place</h2>
          <p className="text-4">
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
        </div>

        <Divider number="02" />
      </div>
    </section>
  );
}
