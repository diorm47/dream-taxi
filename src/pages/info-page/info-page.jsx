import React from "react";
import "./info-page.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { ReactComponent as ProjectImg } from "../../assets/images/project-info.svg";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Facabook } from "../../assets/icons/icon-facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/icon-instagram.svg";
import { ReactComponent as Telegram } from "../../assets/icons/icon-telegram.svg";
import { ReactComponent as Youtube } from "../../assets/icons/icon-youtube.svg";

function InfoPage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="info_page">
      <div className="info_wrapper">
        <div
          className="info_page_title"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h1>Loyiha haqida</h1>
        </div>
        <div
          className="project_img"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <ProjectImg />
        </div>
        <div
          className="project_texts"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3>Kimlar ushbu dasturdan foydalanadilar?</h3>
          <div className="info_green_line"></div>
          <p>
            - Ushbu loyiha viloyatingizni istalgan yónalishi bóyicha qatnovni
            amalga oshiruvchi haydovchilar va yo'lovchilar uchun online
            platformadir. Bu dastur yo'lovchilar va haydovchilarga birdek
            foydali bo'lishi mumkin. Sababi, bizning dastur ayni vaqtdagi
            xaydovchilar haqidagi ma'lumotni soniyalar ichida yetkazadi.
          </p>
          <h3>Yo'lovchilar uchun yo'riqnoma</h3>
          <div className="info_green_line"></div>
          <p>
            - Yo'lovchilar uchun dasturimizda barcha imkoniyat, haydovchilar
            ma'lumotlari va yo'nalishlar mutlaqo ochiq va bepul. Buning uchun
            siz shunchaki dasturimizga tashrif buyurishingiz kifoya. Hattoki,
            ro'yxatdan o'tishingiz ham shart emas. Dasturga kirasiz va siz shu
            zaxoti tizimdagi yo'nalishlar, taksistlar haqidagi eng yangi
            ma'lumotni ko'rasiz va o'zingizga mos haydovchi xizmatlaridan
            foydalana olasiz.
          </p>
          <h3>Haydovchilar uchun yo'riqnoma</h3>
          <div className="info_green_line"></div>
          <p>
            - Haydovchilar uchun bizning dasturda juda qulay imkoniyatlar
            mavjud. O'zi istagan yo'nalishda harakatlanishi, narxni belgilashi,
            ketish vaqtini va qachon dam olishini ham o'zi hal qilishi mumkin.
            Buning uchun ro'yxatdan o'tish va ishni boshlash kifoya. Ro'yxatdan
            o'tish esa juda oson. Email bu sizning loginingiz kabi ishlaydi.
            Sizda email bo'lishi shart emas shunchaki email o'rniga istalgan
            email ko'rinishidagi nomni tanlashingiz mumkin. Ammo parol bilan
            emailni doimo yodda saqlang. Boshqa qurilmadan kirishingiz uchun
            parol va email zarur. Agarda sizda tizimdan o'tishda qanaqadir
            muammo bo'lsa, bizga bog'laning.
          </p>
        </div>

        <footer>
          <div className="footer_links">
            <p>Bizni kuzatib boring</p>
            <div className="footer_links_list">
              <Telegram />
              <Instagram />
              <Facabook />
              <Youtube />
            </div>
          </div>
          <div className="black_line"></div>
          <div className="footer_bottom">
            <div className="footer_logo">
              <NavLink to="/">
                <p>Yo'l-yo'lakay</p>
              </NavLink>
            </div>
            <p>© 2022</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default InfoPage;
