import "../css/Navbar.css";
import userLogo from "../images/user.png";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-end align-items-center shadow-lg">
      <section className="mt-0 mr-5">
        <span className="text-white mr-5 align-text-top">Nombre Usuario</span>
        <img src={userLogo} alt="logo user" />
      </section>
    </nav>
  );
};

export default Navbar;
