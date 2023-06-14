
import "./App.css";
import Header from "./Components/Header";
import Initialize from "./Components/Initialize";
import { useState } from "react";
import { Container } from "@mui/material";
import Mint from "./Components/Mint";

export default function App() {
  const [isConnected, setConnected] = useState(false);
 return (
  <div className="App">
   <Header
        onConnected={() => setConnected(true)}
        onDisconnected={() => setConnected(false)}
   />
      
      <Container sx={{ mt: 15 }}>
        {!isConnected && <Initialize/>}
        {!isConnected && <Mint/>}
   </Container>

  </div>
 );
}



