import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HomeIcon from "@mui/icons-material/Home";
import SellIcon from "@mui/icons-material/Sell";
import ElevatorIcon from "@mui/icons-material/Elevator";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import StairsIcon from "@mui/icons-material/Stairs";
import BedIcon from "@mui/icons-material/Bed";
import Divider from "@mui/material/Divider";

const Listing = ({
  image = "prop1.jpg",
  address = "Address",
  price = 0,
  sqm = 0,
  num_rooms = 0,
  floor = 0,
  num_floors = 0,
  elevator = 0,
  parking = 0,
  id = 0,
}) => {
  return (
    <Card sx={{ maxWidth: 420 }}>
      <CardMedia
        component="img"
        height="185"
        image={`images/${image}`}
        alt="prop"
      />
      <CardContent sx={{ display: "flex", flexDirection: "row" }}>
        <List
          sx={{
            width: "50%",
            maxWidth: 200,
            bgcolor: "background.paper",
          }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <HomeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Address" secondary={address} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SellIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Price" secondary={price} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SquareFootIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Total Area" secondary={sqm} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="# of Rooms" secondary={num_rooms} />
          </ListItem>
        </List>
        <List
          sx={{
            width: "50%",
            maxWidth: 200,
            bgcolor: "background.paper",
          }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <StairsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Floor" secondary={floor} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <HouseSidingIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="# of Floors" secondary={num_floors} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ElevatorIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Elevators" secondary={elevator} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <DirectionsCarIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Parking Spots" secondary={parking} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default Listing;
