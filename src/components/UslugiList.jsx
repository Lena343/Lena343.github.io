import "./uslugi.css"
import "./css/font-awesome.min.css"
import Header from "./Header"
import Footer from "./Footer"
export function UslugiList () {
    return (
        <div id="usl">
        <Header />
        <h1>Услуги</h1>
        <section className="cards-wrapper">
            <div className="card-grid-space">
            <div className="num">01</div>
            <a className="card" style={{
                "--bg-img": "url(https://i.pinimg.com/564x/1d/1b/97/1d1b974adcdc958bff7fc5b4597530e6.jpg)"
                }}>
                <div>
                    <h2>Макияж</h2>
                    <p>Создания образа с помощью косметики, подчеркивающей индивидуальность.</p>
                </div>
            </a>
            </div>
            <div className="card-grid-space">
            <div className="num">02</div>
            <a className="card" style={{
                "--bg-img": "url(https://i.pinimg.com/564x/0b/98/43/0b98435577a671a899ba2ac394e73946.jpg)"
                }}>
                <div>
                    <h2>Аренда одежды</h2>
                    <p>Выбор из широкого ассортимента платьев, костюмов, обуви, аксессуаров и др.</p>
                </div>
            </a>
            </div>
            <div className="card-grid-space">
            <div className="num">03</div>
            <a className="card" style={{
                "--bg-img": "url(https://i.pinimg.com/564x/3c/d8/d7/3cd8d73f46487b05c68eb6f162ab2469.jpg)"
                }}>
                <div>
                    <h2>Backstage</h2>
                    <p>Включает в себя подготовку, настройку декораций, макияж и переодевание моделей и др.</p>
                </div>
            </a>
            </div>
            <div className="card-grid-space">
            <div className="num">04</div>
            <a className="card" style={{
                "--bg-img": "url(https://i.pinimg.com/564x/e4/47/f7/e447f76c48d0c14d316988924ce31cbe.jpg)"
                }}>
                <div>
                    <h2>Фотосъёмка</h2>
                    <p>Включает выбор места съемки, настройка камеры, освещение, композиция и обработка изображений.</p>
                </div>
            </a>
            </div>
            <div className="card-grid-space">
            <div className="num">05</div>
            <a className="card" style={{
                "--bg-img": "url(https://i.pinimg.com/564x/61/ea/30/61ea30693697b334352dcf9f68fb1b4b.jpg)"
                }}>
                <div>
                    <h2>Видеосъёмка</h2>
                    <p>Включает в себя выбор места съемки, настройку оборудования, освещение, композицию и монтаж видео.</p>
                </div>
            </a>
            </div>
            <div className="card-grid-space">
            <div className="num">06</div>
            <a className="card" style={{
                "--bg-img": "url(https://i.pinimg.com/736x/0f/9a/ca/0f9acae463c4625c641532daa14ae91f.jpg)"
                }}>
                <div>
                    <h2>Выезд на место</h2>
                    <p>Проведения фотосессий на территории заказчика. Включает в себя фотосъемку, помощь в освещении и позировании.</p>
                </div>
            </a>
            </div>
        </section>
        <Footer />
        </div>

    )
}