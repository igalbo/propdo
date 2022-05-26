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
                        let first =
                            typeof a.price === "string"
                                ? Number(a.price.replaceAll(",", ""))
                                : a.price;
                        let second =
                            typeof b.price === "string"
                                ? Number(b.price.replaceAll(",", ""))
                                : b.price;

                        if (sort === "asc") {
                            return first - second;
                        }
                        if (sort === "desc") {
                            return second - first;
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
            price={
                typeof item.price === "string"
                    ? Number(item.price.replaceAll(",", ""))
                    : item.price
            }
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
            <div>
                <FiltersRow />
            </div>
            {isLoading ? (
                <LinearProgress />
            ) : (
                <div
                    style={{
                        display: "flex",
                        flexFlow: "row wrap",
                        justifyContent: "space-around",
                    }}
                >
                    {listings}
                </div>
            )}
        </div>
    );
};

export default RealEstate;
