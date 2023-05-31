import { useState } from "react";
import baseUrl from "../configs/environment";

function useHttp() {
  const [errorMsg, setErrorMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState();

  const fetchData = async (values, type, URL) => {
    try {
      const response = await fetch(`${baseUrl}/${URL}`, {
        method: type,
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setSuccessMsg("success");
      }

      if (response.status === 400) {
        setErrorMsg("400 Bad request");
      }

      if (response.status === 401) {
        setErrorMsg("401 Unauthorized");
      }

      if (response.status === 403) {
        setErrorMsg("403 Forbidden");
      }

      if (response.status === 404) {
        setErrorMsg("404 Not found");
      }

      if (response.status === 407) {
        setErrorMsg("407 Proxy Authentication Required");
      }

      if (response.status === 408) {
        setErrorMsg("408 Request Timeout");
      }

      if (response.status === 409) {
        setErrorMsg("409 Conflict");
      }

      if (response.status === 410) {
        setErrorMsg("410 Gone");
      }

      if (response.status === 411) {
        setErrorMsg("411 Gone");
      }

      if (response.status === 412) {
        setErrorMsg("411 Precondition Failed");
      }

      if (response.status === 413) {
        setErrorMsg("413 Payload too Large");
      }

      if (response.status === 414) {
        setErrorMsg("414 URI too Long");
      }

      if (response.status === 415) {
        setErrorMsg("415 Unsupported Media Type");
      }

      if (response.status === 417) {
        setErrorMsg("417 Expectation failed");
      }

      if (response.status === 421) {
        setErrorMsg("417 Misdirected Request");
      }

      const data = await response.json();

      return data;
    } catch (error) {}
  };

  return {
    fetchData,
    errorMsg,
    successMsg,
  };
}

export default useHttp;
