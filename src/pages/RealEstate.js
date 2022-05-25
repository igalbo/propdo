import React, { useContext, useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

import ViewContext from "../ViewContext";
import Listing from "../components/Listing/Listing";
import useFetchTransactions from "../hooks/useFetchTransactions";
import FiltersRow from "../components/FiltersRow/FiltersRow";

const RealEstate = () => {
  const { transactions, isLoading } = useFetchTransactions();
  const [filteredListings, setFilteredListings] = useState([transactions]);
  const { search, sort, rooms } = useContext(ViewContext);

  useEffect(() => {
    transactions.length > 0 &&
      setFilteredListings(
        transactions
          .filter((item) => item.address.includes(search))
          .filter((item) => {
            if (rooms.length === 0) {
              return true;
            }
            return rooms.includes(Number(item.num_rooms));
          })
          .sort((a, b) => {
            if (sort === "asc") {
              return a.price - b.price;
            }
            if (sort === "desc") {
              return b.price - a.price;
            }
            return 0;
          })
      );
  }, [transactions, search, sort, rooms]);

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
      <div className="real-estate__filters">
        <FiltersRow />
      </div>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <div className="real-estate__listings">{listings}</div>
      )}
    </div>
  );
};

export default RealEstate;
