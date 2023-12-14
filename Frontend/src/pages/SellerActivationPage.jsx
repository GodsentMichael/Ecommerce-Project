import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { server } from "../server";
import {toast} from 'react-toastify';

const SellerActivationPage = () => {
  const [error, setError] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const activationToken = searchParams.get("activation_token");
    if (activationToken) {
      const sendRequest = async () => {
        try {
          const res = await axios.post(`${server}/shop/activation`, {
            activation_token: activationToken,
          });
        } catch (err) {
          console.log(err);
          setError(true);
          toast.error("error sending activation token!")
        }
      };
      sendRequest();
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired!</p>
      ) : (
        <p>Your shop has been created suceessfully!</p>
      )}
    </div>
  );
};

export default SellerActivationPage;
