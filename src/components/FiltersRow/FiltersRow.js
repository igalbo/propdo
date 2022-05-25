import React, { useContext } from "react";
import { TextField, Button } from "@mui/material";
import RoomFilter from "./RoomFilter";
import ViewContext from "../../ViewContext";
import "./FiltersRow.css";

const FiltersRow = () => {
  const { search, handleSearch, sort, handleSort } = useContext(ViewContext);

  return (
    <div className="filters-row">
      <TextField
        className="filters-row__search"
        id="outlined-basic"
        onChange={(e) => handleSearch(e.target.value)}
        variant="outlined"
        // fullWidth
        label="Search address"
        value={search}
      />
      <RoomFilter />
      <Button
        variant="contained"
        onClick={handleSort}
        sx={{ minWidth: 200, maxWidth: 300 }}
      >
        Sort By Price: {sort === "asc" ? "descending" : "ascending"}
      </Button>
    </div>
  );
};

export default FiltersRow;
