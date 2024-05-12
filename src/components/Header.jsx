import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span />
          </label>
          <ul className="menu__box">
            <li>
              <Link className="menu__item" to="/">
                Главная
              </Link>
            </li>
            <li>
              <Link className="menu__item" to="/zal">
                Залы
              </Link>
            </li>
            <li>
              <Link className="menu__item" to="/uslugi">
                Услуги
              </Link>
            </li>
            <li>
              <Link className="menu__item" to="/galerea">
                Галерея
              </Link>
            </li>
            <li>
              <Link className="menu__item" to="/pravila">
                Правила
              </Link>
            </li>
          </ul>
        </div>
    );
}