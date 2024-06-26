import "./pravila.css"
import "./css/font-awesome.min.css"
import Header from "./Header"
import Footer from "./Footer"
export function PravilaList () {
    return (
        <div id="prl">
        <Header />
        <div className="text">
            <h1>Правила</h1>
            <p>
            Данный свод правил является публичной офертой. Любой Гость с момента
            бронирования помещения фотостудии либо фактического начала пользования
            помещениями фотостудии признается совершившим акцепт публичной оферты в
            полном объёме и обязуется следовать Правилам.
            </p>
        </div>
        <div className="text_mob">
            <details>
            <summary>Оплата</summary>
            <ul className="text_box">
                <li>
                Бронируя время в фотостудии, вы должны оплатить аренду студии заранее
                или в день съемки. В некоторых студиях может быть возможность оплаты
                после съемки, но это лучше уточнить у администратора. Обычно стоимость
                аренды включает использование всего оборудования и аксессуаров студии,
                а также работу фотографа (если он предусмотрен услугой). В случае
                повреждения оборудования или реквизита, вам придется оплатить штраф.
                </li>
            </ul>
            </details>
            <details>
            <summary>Время аренды</summary>
            <ul className="text_box">
                <li>
                Время пользования фотостудией начинается с фактически забронированного
                времени и заканчивается за 5 минут до окончания.
                </li>
                <li>
                При задержке Гостя в зале более, чем на 10 минут после окончания
                забронированного времени, оплачивается стоимость аренды
                дополнительного часа соответствующего помещения фотостудии.
                </li>
                <li>
                В случае опоздания забронированное время не продлевается на время
                опоздания.
                </li>
                <li>
                При досрочном завершении пользовании фотостудией забронированное время
                оплачивается Гостем полностью.
                </li>
                <li>
                Продление времени пользования фотостудией свыше забронированного
                времени осуществляется по согласованию с администрацией студии при
                условии, что после окончания забронированного времени помещение
                фотостудии свободно.
                </li>
                <li>
                Запрещается заходить в забронированный зал до начала времени
                бронирования. Если вам необходимо заранее подготовиться к съёмке
                внутри зала или использовать гримерное место – вам необходимо
                забронировать дополнительное время аренды зала по существующим
                расценкам.
                </li>
            </ul>
            </details>
            <details>
            <summary>Съёмочный процесс</summary>
            <ul className="text_box">
                <li>
                Гость обязуется соблюдать порядок в арендуемом помещении. При
                нанесении ущерба предметам интерьера, циклораме или оборудованию
                студии, Гость обязан полностью возместить фотостудии их рыночную
                стоимость и возможные финансовые потери из-за невозможности
                осуществления последующих съемок.
                </li>
                <li>
                В студии необходимо находиться в тапочках, босиком или заклеенной
                сменной обуви. В случае нарушения данного правила, администрация
                оставляет за собой право применения штрафных санкций, в размере до 500
                рублей за каждого нарушившего участника съемки.
                </li>
                <li>
                Гость обязуется контролировать всех участников съемки, а также нести
                полную ответственность в пределах забронированного времени.
                </li>
                <li>
                Ответственность за детей, находящихся на территории фотостудии несут
                сопровождающие их взрослые.
                </li>
                <li>
                Мебель, декорации и предметы реквизита по завершению съемки должны
                быть возвращены на прежние места до окончания времени аренды. Студия
                оставляет за собой право взыскать штраф в размере 5000 рублей, в
                случае обнаружения следов небрежного перемещения мебели по залу.
                </li>
                <li>
                Гость обязуется согласовывать съемку с животными с администрацией
                фотостудии. За мелких домашних животных дополнительных оплат не
                предусмотрено.
                </li>
                <li>
                Во время съемочного процесса в помещении фотостудии запрещается:
                <br />
                -использование конфетти, блесток и т.п.
                <br />
                -использование любых красящих веществ
                <br />
                -наклеивать на стены студии клейкую ленту, скотч, а также сверлить
                отверстия и монтировать крепеж.
                <br />
                -курение, разжигание огня, в том числе зажигание свечей на территории
                фотостудии. Курение разрешено только в специально выделенном для этого
                месте на улице, пожалуйста, уточняйте о его расположении у
                администратора.
                <br />
                -осуществление действий, препятствующих персоналу фотостудии
                осуществлять свою работу, в том числе запрещается применять физическое
                и моральное воздействие по отношению к персоналу фотостудии;
                <br />
                -создание помех в работе сотрудников фотостудии;
                <br />
                -вести себя непристойно, ругаться и доставлять неудобства другим
                Гостям фотостудии;
                <br />
                -заходить в служебные помещения фотостудии;
                <br />
                -выносить имущество фотостудии за пределы помещения фотостудии;
                <br />
                -пачкать и портить имущество фотостудии;
                <br />
                -нарушать общественный порядок и спокойствие других Арендаторов и
                Посетителей.
                </li>
                <li>
                В случае, если Гость использует красящие средства без согласования с
                администрацией студии, то он возмещает Исполнителю стоимость ремонтных
                работ в используемом помещении фотостудии для приведения его в
                соответствие с тем видом, в котором он передавался Гостю. В случае
                если причиненный вред привел к невозможности проведения дальнейших
                съемок, Гость компенсирует все возникшие по его вине финансовые потери
                фотостудии. Гость принимает на себя все риски, сопряженные с
                нарушением / ненадлежащим исполнением Гостем или другими участниками
                съемки правил пожарной безопасности и несёт ответственность в полном
                объёме перед Исполнителем за несоблюдением мер пожарной безопасности
                Гостем или другими участниками съемки. В случае срабатывания сирены
                пожарной охраны по вине Гостя, он обязуется оплатить штраф в размере
                5000 рублей. Администрация фотостудии оставляет за собой право не
                допускать в фотостудию и удалять из помещения лиц в состоянии
                алкогольного и/или наркотического опьянения. Гость несет полную
                ответственность за сохранность всего своего имущества и имущества
                других участников съемки, включая личные вещи и оборудование, которое
                расположено в используемом помещении фотостудии, а также в помещениях
                общего пользования. Исполнитель не несет ответственность за
                сохранность имущества Гостя и других участников съемки. Гость и другие
                участники съемки не имеют права передавать/продавать третьим лицам
                взятое во временное пользование и владение оборудование и предметы
                интерьера.
                </li>
                <li>
                По окончании срока пользования фотостудией и оборудованием Гость
                обязан вернуть все в том состоянии, в котором они были получены от
                администрации фотостудии. Администрация не гарантирует запись чистого
                звука в арендуемом помещении.
                </li>
                <li>
                С собаками до 35см роста в холке можно проходить в залы бесплатно. С
                более крупными (по согласованию) породами проход в зал осуществляется
                под залог 1000₽. Залог возвращается при условии сдачи зала после Вашей
                брони в таком же состоянии, в каком он был Вам предоставлен (без
                загрязнений, царапин и шерсти). Категорически запрещено изготовление
                фото- и видеоматериалов порнографического характера, а также
                проведение фотосессий в нижнем белье в местах общего пользования. При
                обнаружении данных фактов, гости, уличенные в этом, обязаны
                незамедлительно покинуть фотостудию, при этом полностью оплатив
                забронированное время. Вся уголовная и административная
                ответственность за данные деяния возлагается на арендаторов зала.
                </li>
            </ul>
            </details>
        </div>
        <Footer />
        </div>

    )
}