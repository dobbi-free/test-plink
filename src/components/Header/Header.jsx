import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logo_wrapper}>
        <NavLink className={style.logo} to={"/"}>
          Products
        </NavLink>

      </div>
    </div>
  );
};

export default Header;
