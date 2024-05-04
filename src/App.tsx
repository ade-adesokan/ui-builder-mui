import React from "react";
import "./App.css";
import { Box, Button, Divider, Stack } from "@mui/material";
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
    <header
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 16,
        padding: "16px 24px",
        background: "white",
        color: "black",
        alignItems: "center",
        borderBottom: "1px solid #ddd",
      }}
      onClick={() => dispatch({ type: "setUi", ui: { itemSelector: null } })}
    >
      <span style={{ fontWeight: 600 }}>Custom UI example </span>
      <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
        <div>
          <Button variant="contained" onClick={() => onPublish(appState.data)}>
            Publish
          </Button>
        </div>
      </div>
    </header>
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
