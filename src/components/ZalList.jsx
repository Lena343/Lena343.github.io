import "./zal.css"
import "./css/font-awesome.min.css"
import Header from "./Header"
import Footer from "./Footer"
import { Link } from "react-router-dom"
export function ZalList () {
    return (
        <div id="zal">
        <Header />
        <h1>Залы</h1>
        <main className="gallery-grid">
            <div className="responsive">
            <div className="gallery">
                <img
                    src="https://i.pinimg.com/564x/87/cd/07/87cd07aee5fd76e6b54f8641e8da7e87.jpg"
                    alt="Cinque Terre"
                />
                <div className="desc">
                <details>
                    <summary>Label</summary>
                    <p>
                    Небольшой зал всего 30 м². Много света, уютное оформление.
                    Идеально подойдёт для совмстной фотосессии. 1200р/час.
                    </p>
                </details>
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <img
                    src="https://i.pinimg.com/564x/a2/d3/7f/a2d37f39f5a1ed9e27c2a04e9249deb9.jpg"
                    alt="Forest"
                />
                <div className="desc">
                <details>
                    <summary>Fury</summary>
                    <p>
                    Зал 25 м². Современный интерьер и минимализм в одном ключе.
                    1200р/час.
                    </p>
                </details>
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <img
                    src="https://i.pinimg.com/564x/a9/9d/f6/a99df683e302830ffa9a836cdaeb7118.jpg"
                    alt="Northern Lights"
                />
                <div className="desc">
                <details>
                    <summary>Dalaran</summary>
                    <p>
                    Небольшой уютный зал (30м²). Уникальный декор, винтажная мебель,
                    передвижные ткани на стене, много света, большое окно, лучи во
                    второй половине дня, зеркало в полный рост, дубовый паркетный пол.
                    1500р/час
                    </p>
                </details>
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <img
                    src="https://i.pinimg.com/564x/70/87/bf/7087bf503175ad23a3db5695109c25fd.jpg"
                    alt="Mountains"
                />
                <div className="desc">
                <details>
                    <summary>Imperio</summary>
                    <p>
                    Зал 70 м². Дизайн оформлен в виде природы. Множество растений и
                    элементов. 1000р/час.
                    </p>
                </details>
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <img
                    src="https://i.pinimg.com/736x/45/28/d7/4528d712f4e505b23355af9d9f68f648.jpg"
                    alt="Cinque Terre"
                />
                <div className="desc">
                <details>
                    <summary>Sities</summary>
                    <p>Просторный зал 80 м² с дизайнерской мебелью. 1300р/час</p>
                </details>
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <img
                    src="https://i.pinimg.com/564x/6a/7b/8f/6a7b8fd6f53cb22319e8ce98249c17fa.jpg"
                    alt="Cinque Terre"
                />
                <div className="desc">
                <details>
                    <summary>Hanashi</summary>
                    <p>
                    Зал 50 м². Искусство пользуется спросом во все времена. Вазы,
                    картины, шторы и другие декорации будут прекрасно дополнять вашу
                    фотосессию. 1100р/час.
                    </p>
                </details>
                </div>
            </div>
            </div>
        </main>
        <div className="cnopka">
            <Link to="/bron" className="btn">
            Отправить заявку
            </Link>
        </div>
        <Footer />
        </div>
    )
}