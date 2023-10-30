import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useAppartment(id) {
  const [appartment, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:3000/datas/appartments.json"
      );
      const data = await response.json();

      const foundAppartment = data.find((item) => item.id === id);

      if (!foundAppartment) {
        navigate("*");
      }
      setData(foundAppartment);
    }

    fetchData();
  }, [id, navigate]);
  return {
    appartment,
  };
}
