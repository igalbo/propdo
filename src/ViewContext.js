import { createContext, useState } from "react";

const ViewContext = createContext();

export function ViewProvider({ children }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [rooms, setRooms] = useState([]);

  const handleSearch = (text) => {
    setSearch(text);
  };

  const handleSort = () => {
    setSort((prevSort) => (prevSort === "asc" ? "desc" : "asc"));
  };

  const handleRooms = (num) => {
    setRooms((prevRooms) => {
      if (prevRooms.length > 0 && prevRooms.includes(num)) {
        return prevRooms.filter((room) => room !== num);
      } else {
        prevRooms.push(num);
      }
    });
    console.log(rooms);
  };

  return (
    <ViewContext.Provider
      value={{ search, handleSearch, sort, handleSort, rooms, handleRooms }}
    >
      {children}
    </ViewContext.Provider>
  );
}

export default ViewContext;
