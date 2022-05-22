import { useEffect, useState } from "react";

import React from "react";

const useFetchTransactions = () => {
  const [transactions, setTransactions] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getTransactions() {
      setIsLoading(true);
      const response = await fetch("transactions.json");
      const data = await response.json();
      setTransactions([data?.properties]);
      setIsLoading(false);
    }
    getTransactions();
  }, []);

  return { transactions, isLoading };
};

export default useFetchTransactions;
