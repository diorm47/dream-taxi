import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import "./login-auth.css";

function AuthPage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="profile">
      <div className="profile_wrapper">
        <div className="autorizing_page">
          <div
            className="create_acc"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2>RO'YXATGA OLISH</h2>

            <div className="create_acc_form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <p>Ism</p>
                <input
                  type="text"
                  {...register("first_name", { required: true })}
                />
                {errors.first_name && <span>* Ismni to'ldirish majburiy!</span>}
                <p>Familiya</p>
                <input
                  type="text"
                  {...register("last_name", { required: true })}
                />
                {errors.last_name && (
                  <span>* Familiyani to'ldirish majburiy!</span>
                )}
                <p>Telefon</p>
                <input
                  type="phone"
                  {...register("phone", { required: true })}
                />
                {errors.phone && <span>* Telefon to'ldirish majburiy! </span>}
                <p>E-pochta</p>
                <input
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>* E-pochtani to'ldirish majburiy!</span>}

                <p>Parol</p>
                <input
                  type="password"
                  {...register(
                    "create_password",
                    { min: 4, max: 8 },
                    { required: true }
                  )}
                />
                {errors.create_password && (
                  <span>* Parolni to'ldirish majburiy!</span>
                )}
                <p>Parolni tasdiqlang</p>
                <input
                  type="password"
                  {...register(
                    "confirm_password",
                    { min: 4, max: 8 },
                    { required: true }
                  )}
                />
                {errors.confirm_password && <span>* Parolni tasdiqlang!</span>}

                <input
                  className="submit_button"
                  type="submit"
                  value="RO'YXATDAN O'TISH"
                />
                <div className="password_recovery">
                  <p>
                    Akkauntingiz bormi? <NavLink to="/login">Kirish</NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
