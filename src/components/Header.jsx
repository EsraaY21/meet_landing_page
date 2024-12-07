import logo from "/assets/logo.svg";

export default function Header() {
  return (
    <header>
      <img src={logo} className="logo" alt="Logo" />
    </header>
  );
}
