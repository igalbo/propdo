import { useEffect, useState } from "react";

const useFetchTransactions = () => {
  const [transactions, setTransactions] = useState({});
  const [totalRooms, setTotalRooms] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getTransactions() {
      let roomOptions = new Set();
      setIsLoading(true);
      const response = await fetch("https://raw.githubusercontent.com/igalbo/propdo/main/public/transactions.json");
      const data = await response.json();
      setTransactions(data?.properties);

      for (let item in data.properties) {
        roomOptions.add(Number(data.properties[item].num_rooms));
      }

      setTotalRooms(Array.from(roomOptions).sort());
      setIsLoading(false);
    }

    getTransactions();
  }, []);

  return { transactions, isLoading, totalRooms };
};

export default useFetchTransactions;
