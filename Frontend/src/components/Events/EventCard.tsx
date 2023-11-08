import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const EventCard = ({ active, data }) => {

  return (
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-12"
      } lg:flex p-2`}
    >
      <div className="w-full lg:w-1/2 m-auto">
        {/* <img src={`${data.images[0]?.url}`} alt="" /> */}
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>
          Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour
        </h2>
        {/* <p>{data?.description}</p> */}
        <p>
          Introducing the iPhone 14 Pro Max – Where Innovation Meets Elegance
          Unleash the Future: The iPhone 14 Pro Max is the epitome of
          cutting-edge technology and unmatched sophistication. It's not just a
          smartphone; it's a revolutionary companion that redefines your digital
          experience. <br />
          Blazing-Fast Performance: Powered by a lightning-fast 256GB SSD and a
          robust 8GB of RAM, this silver beauty delivers seamless multitasking,
          responsive app launches, and rapid data access. It's designed for
          those who demand the best.
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3">
             
              1099$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              
              999$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            {/* {data?.sold_out} sold */}
            120 sold
          </span>
        </div>
        <CountDown />
        <br />
        <div className="flex items-center">
          <Link to={`/product/${data?._id}?isEvent=true`}>
            <div className={`${styles.button} text-[#fff]`}>See Details</div>
          </Link>
          {/* <div className={`${styles.button} text-[#fff] ml-5`} onClick={() => addToCartHandler(data)}>Add to cart</div> */}
          <div
            className={`${styles.button} text-[#fff] ml-5`}
            onClick={() => data}
          >
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
