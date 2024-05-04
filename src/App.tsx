import React from "react";
import "./App.css";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Data, DropZone, Puck, usePuck } from "@measured/puck";
import "@measured/puck/puck.css";
import { config } from "./puckConfig";

// Describe the initial data
const initialData = {
  content: [],
  root: {},
};

const CustomHeader = ({ onPublish }: { onPublish: (data: Data) => void }) => {
  const { appState, dispatch } = usePuck();

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          UI Builder
        </Typography>
        <Button color="inherit" onClick={() => onPublish(appState.data)}>
          Publish
        </Button>
      </Toolbar>
    </AppBar>
  );
};

function App() {
  return (
    <div className="App">
      <Puck config={config} data={initialData}>
        <CustomHeader
          onPublish={(data: Data) => {
            console.log(data);
          }}
        />
        <Stack
          direction="row"
          height={"100vh"}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Box py={2} pl={2}>
            <Puck.Components />
          </Box>
          <DropZone zone="canvas" />
          <Puck.Fields />
        </Stack>
      </Puck>
    </div>
  );
}

export default App;
