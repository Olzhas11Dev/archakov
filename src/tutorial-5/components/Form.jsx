import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { AppContext } from "../context";
import { useContext } from "react";

function Form() {
  const { addToList, setName, name, setEmail, email, setText, text } = useContext(AppContext);

  return (
    <div>
      <Box sx={{ width: "100%", maxWidth: 500, margin: " 20px auto" }}>
        <Typography sx={{ mb: "40px" }} variant="h4">
          Send Comment:
        </Typography>
        <TextField
          onChange={(e) => setName(e.target.value)}
          fullWidth
          id="standard-basic"
          label="Name"
          variant="outlined"
          margin="dense"
          value={name}
        />
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          id="standard-basic"
          label="Email"
          variant="outlined"
          margin="dense"
          value={email}
        />
        <TextField
          onChange={(e) => setText(e.target.value)}
          multiline
          rows={4}
          fullWidth
          id="standard-basic"
          label="Text"
          variant="outlined"
          margin="dense"
          value={text}
        />
        <Button
          onClick={addToList}
          sx={{ height: "48px", mt: "10px" }}
          variant="contained"
          fullWidth
          type="submit"
        >
          Send
        </Button>
      </Box>
    </div>
  );
}

export default Form;
