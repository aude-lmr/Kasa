import { useEffect, useState } from "react";

export function useAppartment(id) {
  const [appartment, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:3000/datas/appartments.json"
      );
      const data = await response.json();

      const foundAppartment = data.find((item) => item.id === id);

      setData(foundAppartment);
    }

    fetchData();
  }, [id]);
  return {
    appartment,
  };
}