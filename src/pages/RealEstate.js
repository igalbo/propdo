import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ViewContext from "../ViewContext";
import Listing from "../components/Listing/Listing";
import useFetchTransactions from "../hooks/useFetchTransactions";

const RealEstate = () => {
  const navigate = useNavigate();
  const [filteredListings, setFilteredListings] = useState([]);
  const { transactions, isLoading } = useFetchTransactions();

  useEffect(() => {
    transactions &&
      transactions.length > 0 &&
      setFilteredListings(...transactions);
  }, [transactions]);

  console.log(filteredListings);

  const listings = filteredListings?.map((item, index) => (
    <Listing
      key={index}
      address={item.address}
      image={`prop${Math.ceil(Math.random() * 5)}.jpg`}
      price={item.price}
      sqm={item.sqm}
      num_rooms={item.num_rooms}
      floor={item.floor}
      num_floors={item.num_floors}
      elevator={item.elevator}
      parking={item.parking}
      id={item.id}
    />
  ));

  return (
    <div className="real-estate">
      <p>Real estate page</p>
      <div className="real-estate__listings">{listings}</div>
      <button
        onClick={() => {
          navigate("/map");
        }}
      >
        Got to map
      </button>
    </div>
  );
};

export default RealEstate;
