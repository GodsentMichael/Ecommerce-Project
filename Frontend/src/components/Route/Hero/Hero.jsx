import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://plus.unsplash.com/premium_photo-1661774910035-05257f7d73a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww&w=1000&q=80)",
          backgroundSize: "cover"
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Shop Now and <br />Unlock Affordable Luxury <br />
        </h1>
        <p className="pt-5 md:w-26 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
         Indulge in the ultimate shopping experience  and be <br /> rest assured your journey to a more luxurious lifestyle begins here. <br /> Enjoy hassle-free shopping with our quick and secure delivery services. <br /> We ensure your orders reach you in perfect condition and on time.
         
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
