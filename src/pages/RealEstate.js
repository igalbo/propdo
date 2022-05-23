import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

import ViewContext from "../ViewContext";
import Listing from "../components/Listing/Listing";
import useFetchTransactions from "../hooks/useFetchTransactions";

const RealEstate = () => {
  const navigate = useNavigate();
  const { transactions, isLoading } = useFetchTransactions();
  const [filteredListings, setFilteredListings] = useState([transactions]);
  const { search, handleSearch, sort, handleSort, rooms, handleRooms } =
    useContext(ViewContext);

  useEffect(() => {
    transactions.length > 0 &&
      setFilteredListings(
        transactions.filter((item) => item.address.includes(search))
      );
  }, [transactions, search]);

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
      <div className="real-estate__filters">
        <TextField
          className="real-estate__filters__search"
          id="outlined-basic"
          onChange={(e) => handleSearch(e.target.value)}
          variant="outlined"
          fullWidth
          label="Search"
          value={search}
        />

        {/* <RoomSelector />
        <Sort /> */}
      </div>
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
