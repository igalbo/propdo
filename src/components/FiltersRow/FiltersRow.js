import React, { useContext } from "react";
import { TextField } from "@mui/material";
import "./FiltersRow.css";
import RoomFilter from "./RoomFilter";
import ViewContext from "../../ViewContext";

const FiltersRow = () => {
  const { search, handleSearch, sort, handleSort } = useContext(ViewContext);

  return (
    <div>
      <TextField
        className="real-estate__filters__search"
        id="outlined-basic"
        onChange={(e) => handleSearch(e.target.value)}
        variant="outlined"
        fullWidth
        label="Search"
        value={search}
      />
      <RoomFilter />
      <button onClick={handleSort}>
        Sort {sort === "desc" ? "ascending" : "descending"}
      </button>
    </div>
  );
};

export default FiltersRow;
