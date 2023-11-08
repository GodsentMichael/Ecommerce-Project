import React from "react";
import styles from "../../../styles/styles";

const Sponsored = () => {
//   return (
//     <div
//       className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
//     >
//       <div className="flex sm:flex-col justify-between w-full">
//         <div className="flex items-start">
//           <img
//             src="https://1000logos.net/wp-content/uploads/2018/10/Hisense-Logo-1969.png"
//             alt=""
//             style={{ width: "150px", objectFit: "contain" }}
//           />
//         </div>
//         <div className="flex items-start">
//           <img
//             src="https://abamade.brimble.app/img/logo.fea509ac.svg"
//             alt=""
//             style={{ width: "150px", objectFit: "contain" }}
//           />
//         </div>
//         <div className="flex items-start">
//           <img
//             src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png"
//             alt=""
//             style={{ width: "150px", objectFit: "contain" }}
//           />
//         </div>
//         <div className="flex items-start">
//           <img
//             src="https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/LG-900x0.jpg"
//             alt=""
//             style={{ width: "150px", objectFit: "contain" }}
//           />
//         </div>
//         <div className="flex items-start">
//           <img
//             src="https://i.pinimg.com/originals/dc/36/c1/dc36c1d02dfe2ec192b7ec6d2289cb2d.png"
//             alt=""
//             style={{ width: "150px", objectFit: "contain" }}
//           />
//         </div>
//         <div className="flex items-start">
//           <img
//             src="https://digitalagencynetwork.com/wp-content/themes/danglobal/assets/images/dan-logo-svg.svg?svg"
//             alt=""
//             style={{ width: "150px", objectFit: "contain" }}
//           />
//         </div>
//       </div>
//     </div>
//   );

return (
    <div className={`${styles.section} bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}>
      <div className="flex flex-wrap justify-center">
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2">
          <img
            src="https://1000logos.net/wp-content/uploads/2018/10/Hisense-Logo-1969.png"
            alt=""
            className="w-full h-auto"
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2">
          <img
            src="https://abamade.brimble.app/img/logo.fea509ac.svg"
            alt=""
            className="w-full h-auto"
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png"
            alt=""
            className="w-full h-auto"
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2">
          <img
            src="https://hypercityng.com/wp-content/uploads/2022/06/cropped-HC-e1659439288446.png"
            alt=""
            className="w-full h-auto"
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2">
          <img
            src="https://i.pinimg.com/originals/dc/36/c1/dc36c1d02dfe2ec192b7ec6d2289cb2d.png"
            alt=""
            className="w-full h-auto"
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2">
          <img
            src="https://digitalagencynetwork.com/wp-content/themes/danglobal/assets/images/dan-logo-svg.svg?svg"
            alt=""
            className="w-full h-auto"
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
  
};

export default Sponsored;
