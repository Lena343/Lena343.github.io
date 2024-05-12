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

                <i className="fa fa-facebook-f" />

                <i className="fa fa-twitter" />

                <i className="fa fa-instagram" />

            </div>
            </div>
        </div>
        </div>
        </footer>
    )
}
