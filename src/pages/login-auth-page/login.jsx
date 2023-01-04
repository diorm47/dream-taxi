import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import "./login-auth.css";

function LoginPage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onAuthorize = (data) => {
    console.log(data);
  };

  return (
    <div className="profile">
      <div className="profile_wrapper">
        <div className="autorizing_page">
          <div className="sign_in" data-aos="fade-up" data-aos-duration="1000">
            <h2>KIRISH</h2>

            <div className="signin_form">
              <form onSubmit={handleSubmit(onAuthorize)}>
                <div className="email_sign">
                  <p>E-POCHTA</p>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span>* E-pochtani to'ldirish majburiy!</span>
                  )}
                </div>
                <div className="password_sign">
                  <p>PAROL</p>
                  <input
                    type="password"
                    {...register(
                      "password",

                      { required: true }
                    )}
                  />
                  {errors.password && <span>* Parol to'ldirish majburiy!</span>}
                </div>

                <div className="signin_button">
                  <input
                    className="submit_button"
                    type="submit"
                    value="KIRISH"
                  />
                </div>
              </form>
              <div className="password_recovery">
                <NavLink to="/auth">
                  <p>Yangi akkaunt yaratish</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
