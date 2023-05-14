import { useState } from "react";
import baseUrl from "../configs/environment";

function useHttp() {
  const [error400, setError400] = useState(false);

  const fetchData = async (values, type, URL) => {
    try {
      const response = await fetch(`${baseUrl}/${URL}`, {
        method: type,
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        setError400(true);
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    fetchData,
    error400,
  };
}

export default useHttp;
