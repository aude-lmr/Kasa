import { useEffect, useState } from "react";

export function useAppartments() {
  const [appartments, setAppartment] = useState([]);

  useEffect(() => {
    fetch("./datas/appartments.json")
      .then((response) => response.json())
      .then((data) => {
        setAppartment(data);
      });
  }, []);
  return {
    appartments,
  };
}
