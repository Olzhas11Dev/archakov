import React, { useContext } from "react";
import {
  Box,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";
import { AppContext } from "../context";

function Feedback() {
  const { list, removeData } = useContext(AppContext);
  console.log(list);

  return (
    <div>
      <Box sx={{ width: "100%", maxWidth: 500, margin: " 20px auto" }}>
        <Typography sx={{ mb: "40px" }} variant="h4">
          Feedback:
        </Typography>
        {list.map((item) => {
          return (
            <ListItem key={item.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={item.fullName}
                secondary={
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {item.text}
                  </Typography>
                }
              />
              <Typography sx={{ marginRight: "20px", fontSize: "12px" }}>
                {item.createdAt}
              </Typography>
              <Button variant="contained" onClick={(e) => removeData(item.id)}>
                Delete
              </Button>
            </ListItem>
          );
        })}
      </Box>
    </div>
  );
}

export default Feedback;
