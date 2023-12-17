import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductDetails from "../components/Products/ProductDetails";
import SuggestedProduct from "../components/Products/SuggestedProduct";
import { getAllProductsShop } from "../redux/actions/product";
import Loader from "../components/Layout/Loader"; // Import your Loader component

const ProductDetailsPage = () => {
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const { seller } = useSelector((state) => state.seller);
  const { allEvents } = useSelector((state) => state.events);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const eventData = searchParams.get("isEvent");

  const dispatch = useDispatch();

  useEffect(() => {
    if (eventData !== null) {
      const eventData = allEvents && allEvents.find((i) => i._id === id);
      setData(eventData);
      console.log("Event Data:", eventData);
    } else {
      const productData = allProducts && allProducts.find((i) => i._id === id);
      setData(productData);
      console.log("Product Data:", productData);
    }
  }, [allProducts, allEvents, id, eventData]);

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {!eventData && data && <SuggestedProduct data={data} />}
     
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
