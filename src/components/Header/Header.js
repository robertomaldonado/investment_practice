import classes from "./Header.module.css";
import logo from "../../assets/investment-calculator-logo.png";

function Header() {
  return (
    <div>
      <header className={classes.header}>
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    </div>
  );
}

export default Header;
