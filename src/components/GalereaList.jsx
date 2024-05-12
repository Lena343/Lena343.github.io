import Header from "./Header"
import "./galeria.css"
export function GalereaList () {
    return (
        <div id="gal">
        <h1>Галерея</h1>
        <div className="external">
            <div className="horizontal-scroll-wrapper">
            <div className="img-wrapper slower">
                <a target="_blank" rel="noopener">
                <img
                    src="https://i.pinimg.com/564x/bf/6a/c5/bf6ac54bce8505217064e2af235e7915.jpg"
                    alt=""
                />
                </a>
            </div>
            <div className="img-wrapper faster">
                <a target="_blank" rel="noopener">
                <img
                    src="https://i.pinimg.com/564x/bb/e8/88/bbe888587e9153c2f733e21ace58f0c9.jpg"
                    alt=""
                />
                </a>
            </div>
            <div className="img-wrapper slower vertical">
                <a target="_blank" rel="noopener">
                <img
                    src="https://i.pinimg.com/564x/a9/6b/58/a96b58ab71c1e2ab3bfd86be92d00255.jpg"
                    alt=""
                />
                </a>
            </div>
            <div className="img-wrapper slower slower-down">
                <a target="_blank" rel="noopener">
                <img
                    src="https://i.pinimg.com/564x/cc/a9/ea/cca9ea1757fbc0f659cc7653c3f7ff3a.jpg"
                    alt=""
                />
                </a>
            </div>
            <div className="img-wrapper">
                <a target="_blank" rel="noopener">
                <img
                    src="https://i.pinimg.com/564x/39/81/46/398146111a31785c2516fa8cc7a50c4a.jpg"
                    alt=""
                />
                </a>
            </div>
            <div className="img-wrapper slower">
                <a target="_blank" rel="noopener">
                <img
                    src="https://i.pinimg.com/564x/63/c9/9b/63c99b951a075a7941d1580817b3f5f3.jpg"
                    alt=""
                />
                </a>
            </div>
            <div className="img-wrapper faster1">
                <a target="_blank" rel="noopener">
                <img
                    src="https://i.pinimg.com/564x/d9/d0/1f/d9d01fcd0923b3fa8a74e9259b594405.jpg"
                    alt=""
                />
                </a>
            </div>
            <div className="img-wrapper slower slower2">
                <a target="_blank" rel="noopener">
                <img
                    src="https://i.pinimg.com/564x/8b/99/7b/8b997bb5c6c6c21889f668aec2b3c849.jpg"
                    alt=""
                />
                </a>
            </div>
            <div className="img-wrapper">
                <a target="_blank" rel="noopener">
                <img
                    src="https://i.pinimg.com/564x/f6/0c/d7/f60cd71028bc5cc5e92e2eba685a500a.jpg"
                    alt=""
                />
                </a>
            </div>
            <div className="img-wrapper slower">
                <a rel="noopener">
                <img
                    src="https://i.pinimg.com/564x/32/ac/33/32ac33cc208dad98af4c437403fbee51.jpg"
                    alt=""
                />
                </a>
            </div>
            <div className="img-wrapper slower last">
                <a target="_blank" rel="noopener">
                <img
                    src="https://i.pinimg.com/564x/3c/3f/77/3c3f77702a7823aa076e5d6076c92001.jpg"
                    alt=""
                />
                </a>
            </div>
            </div>
        </div>
        <Header />
        </div>
    )
}