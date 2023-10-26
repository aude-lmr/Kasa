import { useEffect, useState } from "react";

export function useAppartments() {
  const [appartments, setAppartment] = useState([]);

  useEffect(() => {
    async function fetchDatas() {
      const response = await fetch("./datas/appartments.json");
      const data = await response.json();

      setAppartment(data);
    }

    fetchDatas();
  }, []);
  return {
    appartments,
  };
}
