import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="footer">
        <div className="container">
        <div className="row">
            <div className="footer-col">
            <h4>company</h4>
            <ul>
                <li>
                <Link to="/">О нас</Link>
                </li>
                <li>
                <Link to="/uslugi">Услуги</Link>
                </li>
                <li>
                <Link to="/pravila">Правила</Link>
                </li>
                <li>
                <Link to="/bron">Оставить заявку</Link>
                </li>
            </ul>
            </div>
            <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
                <a href="#">
                <i className="fa fa-facebook-f" />
                </a>
                <a href="#">
                <i className="fa fa-twitter" />
                </a>
                <a href="#">
                <i className="fa fa-instagram" />
                </a>
            </div>
            </div>
        </div>
        </div>
        </footer>
    )
}