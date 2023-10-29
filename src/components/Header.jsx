import Logo from '../assets/logo.png';
import './header.css';
const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      <ul className="header__menu">
        <li>Home</li>
        <li>Programs</li>
        <li>Why Us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
};
export default Header;
