import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as DocumentIcon } from "../../assets/images/document.svg";
import { ReactComponent as DriverCard1 } from "../../assets/images/driver-cards-1.svg";
import { ReactComponent as DriverCard2 } from "../../assets/images/driver-cards-2.svg";
import { ReactComponent as DriverCard3 } from "../../assets/images/driver-cards-3.svg";
import { ReactComponent as MainImg } from "../../assets/images/main-img.svg";
import { ReactComponent as PassengerCard1 } from "../../assets/images/pessenger-cards-1.svg";
import { ReactComponent as PassengerCard2 } from "../../assets/images/pessenger-cards-2.svg";
import { ReactComponent as PassengerCard3 } from "../../assets/images/pessenger-cards-3.svg";
import { ReactComponent as SearchDrivers } from "../../assets/images/search-phone.svg";
import "./main-page.css";

function MainPage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <header>
        <div
          className="header_wrapper"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="left_part">
            <MainImg />
          </div>
          <div className="right_part">
            <div className="right_part_text">
              <p>
                Dream Taxi orqali shaharlararo qatnovni tez va oson amalga
                oshiring. Siz yo'lovchi bo'lsangiz, shunchaki o'zingizga mos
                yo'nalish va taksilarni toping. Agarda haydovchi bo'lsangiz,
                bizda ro'yxatdan o'ting va onlayn mijozlarga ega bo'ling.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div
        className="green_line"
        data-aos="fade-up"
        data-aos-duration="1000"
      ></div>

      <section>
        <div
          className="passengers_cards"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="passenger_card1">
            <p>Haydovchilarni uyingizdan chiqmasdan topishni xohlaysizmi?</p>
            <PassengerCard1 />
          </div>
          <div className="passenger_card2">
            <p>Shaharlararo manzilingizga biz bilan yetib olishnichi?</p>{" "}
            <PassengerCard2 />
          </div>
          <div className="passenger_card3">
            <p>Unda o'z manzilingizni tanlang va haydovchilarni toping.</p>
            <PassengerCard3 />
          </div>
        </div>
      </section>
      <section>
        <div className="search_taxist">
          <div
            className="search_section_title"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1>Taksilarni izlash</h1>
          </div>
          <div className="search_section_blocks">
            <div
              className="search_left"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <SearchDrivers />
            </div>
            <div className="search_right">
              <div
                className="search_right_text"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p>
                  Dasturdagi Taksilar bo'limiga o'ting. U yerda haydovchilarni
                  oson topish uchun bir nechta saralash usullari ko'rsatilgan.
                  Ulardan birini tanlagan holda o'zingizga kerakli yo'nalishdagi
                  haydovchilarni tez saralab oling. Har bir haydovchi haqida
                  qisqa ma'lumotlarni ko'rasiz. O'zingiz ma'qul topgan
                  haydovchini tanlasangiz, haydovchi haqida to'liq ma'lumotni
                  bilib olasiz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="green_line"
        data-aos="fade-up"
        data-aos-duration="1000"
      ></div>
      <section>
        <div
          className="drivers_cards"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="drivers_card1">
            <p>Haydovchilarni uyingizdan chiqmasdan topishni xohlaysizmi?</p>
            <DriverCard1 />
          </div>
          <div className="drivers_card2">
            <p>Shaharlararo manzilingizga biz bilan yetib olishnichi?</p>{" "}
            <DriverCard2 />
          </div>
          <div className="drivers_card3">
            <p>Unda o'z manzilingizni tanlang va haydovchilarni toping.</p>
            <DriverCard3 />
          </div>
        </div>
      </section>
      <section>
        <div className="main_signin">
          <div
            className="main_signin_title"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1>Ro'yxatdan o'tish</h1>
          </div>
          <div className="main_signin_blockers">
            <div
              className="main_sign_left"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <DocumentIcon />
            </div>
            <div className="main_sign_right">
              <div
                className="main_sign_right_items"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="main_sign_text">
                  <p>
                    Agar siz uzoq masofaga, masalan poytaxtga va poytaxtdan uyga
                    qatnovchi taksist bo'lsangiz bu dastur siz uchun ayni
                    muddao. Siz biz bilan o'z yo'nalishingiz va unga doir
                    ma'lumotlarni, yo'lovchilarga oson yetkazasiz. O'z
                    mijozlaringizni esa oson topasiz, xattoki oldindan e'lon
                    berasiz. Agar siz endi qiynalmasdan mijoz topishni
                    istasangiz xoziroq ro'yxatdan o'ting va ishni shu zaxoti
                    boshlang. Ro'yxatdan o'tish juda ham oson, kerakli
                    maydonlarni to'ldirsangiz siz uchun barcha haydovchi
                    uskunalari ochiladi.
                  </p>
                </div>
                <div className="start_btn_main">
                  <NavLink to="/login">
                    <button>Ishni boshlash</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainPage;
