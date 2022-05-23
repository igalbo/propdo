import React, { useContext } from "react";
import {
  Checkbox,
  TextField,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

import ViewContext from "../../ViewContext";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const FiltersRow = () => {
  const { search, handleSearch, sort, handleSort, rooms, handleRooms } =
    useContext(ViewContext);

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
      {/* <div className="rooms-checkboxes">
        <input
          type="checkbox"
          id="1"
          onChange={(e) => handleRooms(e.target.id)}
        />
        <input
          type="checkbox"
          id="2"
          onChange={(e) => handleRooms(e.target.id)}
        />
      </div> */}
      <button onClick={handleSort}>Sort</button>
    </div>
  );
};

export default FiltersRow;
