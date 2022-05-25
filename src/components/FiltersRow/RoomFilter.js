import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ViewContext from "../../ViewContext";
import useFetchTransactions from "../../hooks/useFetchTransactions";

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

function getStyles(room, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(room) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const { rooms, handleRooms } = useContext(ViewContext);
  const { totalRooms } = useFetchTransactions();

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-room-label">Rooms</InputLabel>
        <Select
          labelId="demo-multiple-room-label"
          id="demo-multiple-room"
          multiple
          value={rooms}
          onChange={handleRooms}
          input={<OutlinedInput label="Room" />}
          MenuProps={MenuProps}
        >
          {totalRooms.length > 0 &&
            totalRooms.map((room) => (
              <MenuItem
                key={room}
                value={room}
                style={getStyles(room, rooms, theme)}
              >
                {room}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}
