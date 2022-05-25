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

  const handleRooms = (event) => {
    const {
      target: { value },
    } = event;
    setRooms(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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
