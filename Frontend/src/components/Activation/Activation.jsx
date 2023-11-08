import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { server } from "../../server";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Activation = () => {
  const [error, setError] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const activationToken = searchParams.get("activation_token");
    if (activationToken) {
      console.log("ACTIVATIONTOKEN=>", activationToken);
      const sendRequest = async () => {
        try {
          const res = await axios.post(`${server}/user/activation`, {
            activation_token: activationToken,
          });
          console.log("ACTIVATION TOKEN=>", activationToken);
          console.log(res);
        } catch (err) {
          console.log(err);
          setError(true);
          toast.error("error sending activation token!")
        }
      };
      sendRequest();
    }
  }, [searchParams]);

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
        <p>Your account has been created successfully!</p>
      )}
    </div>
  );
};

export default Activation;
