import { useEffect, useState } from "react";

export function useAppartment(id) {
  const [appartment, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("./datas/appartments.json");
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
