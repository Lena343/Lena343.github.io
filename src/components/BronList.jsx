import { useState } from "react";
import "./broy.css"
import "./css/font-awesome.min.css"
import { Link } from "react-router-dom";


export function BronList () {

    const [isOpened, setIsOpened] = useState('');

    function handleOpenClick() {
        setIsOpened('opened');
    }

    function handleCloseClick() {
        setIsOpened('');
    }

    return (
        <div id="brn">
        <div id="booking" className="section">
            <div className="section-center">
            <div className="container">
                <div className="row">
                <div className="booking-form">
                <div className="c">
                    <Link to="/zal" className="c1">&larr; К залам</Link>
                </div>
                    <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                        <span className="form-label">Имя</span>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Введите ваше имя"
                        />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                        <span className="form-label">Телефон</span>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Введите ваш номер телефона"
                        />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                        <span className="form-label">Дата</span>
                        <input className="form-control" type="date" required="" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                        <span className="form-label">Время аренды</span>
                        <select className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>Другое время</option>
                        </select>
                        <span className="select-arrow" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                        <span className="form-label">Количество моделей</span>
                        <select className="form-control">
                            <option>1 модель</option>
                            <option>2 модели</option>
                            <option>3 модели</option>
                            <option>Другое количество</option>
                        </select>
                        <span className="select-arrow" />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                        <span className="form-label">Зал</span>
                        <select className="form-control" data-style="btn-primary" multiple="" data-max-options={6}>
                            <option>Label</option>
                            <option>Fury</option>
                            <option>Dalaran</option>
                            <option>Imperio</option>
                            <option>Sities</option>
                            <option>Hanashi</option>
                        </select>
                        <span className="select-arrow" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-btn">
                        <button
                            className="primary"
                            onClick={handleOpenClick}
                        >
                            Отправить заявку
                        </button>
                        <dialog open={isOpened} id="dialog">
                            <h2>Ваша заявка отправлена.</h2>
                            <button
                                onClick={handleCloseClick}
                                aria-label="close"
                                className="x"
                            >
                            ❌
                            </button>
                        </dialog>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}