import "./fitcss.css"
import "./css/font-awesome.min.css"
import Header from "./Header"
import Footer from "./Footer"
import { Link } from "react-router-dom"

export function FitList () {
    return (
        <div id="fit">
        <Header />
        <section className="parallax-container">
          <h1>SSARYMO</h1>
          <b>Фотостудия в самом центре Санкт-Петербурга специально для тебя</b>
        </section>
        <section className="buffer1">
          <p>
            "Виновным быть-моё призванье!- сказал фотограф.- Это я глаза скосил,
            скривил вам ноги, живот ваш тоже я нажрал."
          </p>
        </section>
        <section className="parallax-container parallax-container2"> 
          <div className="card-holder">
            <div className="card">
              <div className="card-img" />
              <h3>Большие залы</h3>
              <p>
              Большие залы для фотостудии представляют собой просторные, светлые и функциональные пространства. Имеют высокие потолки и большие окна для обеспечения оптимального освещения.
              </p>
            </div>
            <div className="card">
              <div className="card-img" />
              <h3>Средние залы</h3>
              <p>
              Средние залы для фотостудии обычно имеют площадь от 30 до 50 квадратных метров и высоту потолков от 2,5 до 4 метров. Присутствуют окна, которые обеспечивают естественное освещение.
              </p>
            </div>
            <div className="card">
              <div className="card-img" />
              <h3>Маленькие залы</h3>
              <p>
              Пространство, необходимое для съемки, с минимальными затратами и возможностью гибко изменять обстановку. Может быть трудно работать с большими группами людей.
              </p>
            </div>
          </div>
          <section>
            <div className="cnopka">
                <Link to="/zal" className="btn">
                Все залы
                </Link>
            </div>
          </section>
        </section>
        <Footer />
      </div>
    )
}