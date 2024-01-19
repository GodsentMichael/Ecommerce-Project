import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";

const EventCard = ({ active, data }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCartHandler = (data) => {
    const isItemExists = cart && cart.find((i) => i._id === data._id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock is limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  }
  return (
    <div className={`w-full block bg-white rounded-lg ${active ? "unset" : "mb-12"} lg:flex p-2`}>
      <div className="w-full lg:w-1/2 mx-auto mb-4 lg:mb-0">
        <img
          src={`${data?.images[0]?.url}`}
          alt={data?.name}
          className="w-full h-auto  object-cover rounded-lg"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center pl-4">
        <h2 className={`${styles.productTitle} text-2xl font-bold mb-2`}>{data?.name}</h2>
        <p className="text-gray-700 mb-4">{data?.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex">
            <h5 className="font-semibold text-red-500 text-sm line-through pr-3">
              {data?.originalPrice}₦
            </h5>
            <h5 className="font-bold text-lg text-black">
              {data?.discountPrice}₦
            </h5>
          </div>
          <span className="text-green-600 text-sm pr-3">
            {data?.sold_out} sold
          </span>
        </div>
        <CountDown data={data} />
        <div className="flex items-center mt-4">
          <Link to={`/product/${data?._id}?isEvent=true`} className={`${styles.button} text-white`}>
            See Details
          </Link>
          <div
            className={`${styles.button} text-white ml-4`}
            onClick={() => addToCartHandler(data)}
          >
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default EventCard;
