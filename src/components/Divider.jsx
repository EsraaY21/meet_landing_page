export default function Divider({ number }) {
  return (
    <>
      <div class="vertical_line"></div>
      <div className="number">
        <span className="text-5">{number}</span>
      </div>
    </>
  );
}
