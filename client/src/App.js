import "./styles/App.css";
import React, { Fragment } from "react";
import AppHeader from "./components/AppHeader";
import Home from "./pages/Home";
import FileUploadField from "./components/FileUploadField";
import AudioPlayer from "./components/AudioPlayer";
import Box from "@material-ui/core/Box";
import SimpleCard from "./components/SimpleCard";
import { CssBaseline, withStyles } from "@material-ui/core";

const musicFiles = {
  electedDocument: {
    file: null,
  },
  selectedFile: null,
};

function App() {
  return (
    <div>
      <CssBaseline>
        <AppHeader />
        <Box my="10rem" mx="4rem" justifyContent="center">
          <SimpleCard>
            {/* <FileUploadField></FileUploadField> */}
            <AudioPlayer></AudioPlayer>
          </SimpleCard>
        </Box>
      </CssBaseline>
    </div>
  );
}
export default App;
