import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { ReactComponent as EmptyIcon } from "../../assets/images/not-drivers.svg";
import "./taxies-page.css";

function TaxiesPage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  let data = null;
  return (
    <div className="drivers_page_wrapper">
      {data ? (
        <div className="drivers_page"></div>
      ) : (
        <div className="empty_message">
          <div
            className="empty_message_block"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <EmptyIcon />
            <p>Haydovchilar topilmadi!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaxiesPage;
